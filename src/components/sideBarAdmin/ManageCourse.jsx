import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";

export default function ManageCourse () {
    let i=1;

     const [allCourse,setCourse]=useState([]);

    const courseCollectionsRef = collection(db, "Course");
    const getCourse = async () =>{
        try{
          const data = await getDocs(courseCollectionsRef);
          const filteredData =data.docs.map((doc)=>({
              ...doc.data(),
              id:doc.id,
           
          }));
          setCourse(filteredData)
      
        }catch(err){
      console.error(err);
        }
      }
    useEffect(()=> {

        const getCourse = async () =>{
          try{
            const data = await getDocs(courseCollectionsRef);
            const filteredData =data.docs.map((doc)=>({
                ...doc.data(),
                id:doc.id,
             
            }));
            setCourse(filteredData)
        
          }catch(err){
        console.error(err);
          }
        }
        getCourse();
    },[]);
     
     const deletCourse = async (id) => {
       await deleteDoc(doc(db, "Course", id));
       await getCourse();
     }


    return (
        <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Manage Courses</h3>
                    </div>
                    
                    <div className="card-body">
                        <table id="example2" className="table table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Course</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                       {  
                                        allCourse.map((doc) => (
                                          
                                                 <tr key={doc.id}>
                                            <td>{i++}</td>
                                            <td> {doc.CourseName}</td>
                                            <td> 
                                            <button onClick={()=>deletCourse(doc.id)} className="btn btn-danger btn-block">Delet</button>
                                             </td>
                                       </tr>
                                       
                                             
                                        )
                                           
                                        )
                                       }
   
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )


}