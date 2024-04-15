import { collection, getDocs ,deleteDoc,doc} from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";

export default function ManageStudent () {
    let i=1;

    const [allStaff,setStaff]=useState([]);

   const studentCollectionsRef = collection(db, "Student");
    const getStaff = async () =>{
       try{
          const data = await getDocs(studentCollectionsRef);
         const filteredData =data.docs.map((doc)=>({
              ...doc.data(),
              id:doc.id,
          
          }));
          setStaff(filteredData)
     
        }catch(err){
     console.error(err);
        }
     }
   useEffect(()=> {

       const getStudent = async () =>{
         try{
           const data = await getDocs(studentCollectionsRef);
           const filteredData =data.docs.map((doc)=>({
               ...doc.data(),
               id:doc.id,
            
           }));
           setStaff(filteredData)
       
         }catch(err){
       console.error(err);
         } 
       }
       getStudent();
   },[]);
   const deletStudent = async (id) => {
    await deleteDoc(doc(db, "Student", id));
    await getStaff();
  }
    return (
        <>
 <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Manage Students</h3>
                    </div>
                 
                    <div className="card-body">
                        <table id="example2" className="table table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Course</th>
                            
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {  
                                        allStaff.map((doc) => (
                                          
                                                 <tr key={doc.id}>
                                            <td>{i++}</td>
                                            <td> {doc.FName}{","+doc.LName}</td>
                                            <td>{doc.Email}</td>
                                            <td>{doc.Gender}</td>
                                            <td>{doc.Course}</td>
                                          
                                            <td>{ <button onClick={()=>deletStudent(doc.id)} className="btn btn-danger btn-block">Delet</button>}</td>
                                            
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