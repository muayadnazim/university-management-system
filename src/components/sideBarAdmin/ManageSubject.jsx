import { collection, getDocs ,deleteDoc,doc} from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";

export default function ManageSubject () {
    let i=1;

    const [allSubject,setSubject]=useState([]);

   const SubjectCollectionsRef = collection(db, "Subject");
    const getSubject = async () =>{
       try{
          const data = await getDocs(SubjectCollectionsRef);
         const filteredData =data.docs.map((doc)=>({
              ...doc.data(),
              id:doc.id,
          
          }));
          setSubject(filteredData)
     
        }catch(err){
     console.error(err);
        }
     }
   useEffect(()=> {

       const getSubject = async () =>{
         try{
           const data = await getDocs(SubjectCollectionsRef);
           const filteredData =data.docs.map((doc)=>({
               ...doc.data(),
               id:doc.id,
            
           }));
           setSubject(filteredData)
       
         }catch(err){
       console.error(err);
         }
       }
       getSubject();
   },[]);
   const deletSubject = async (id) => {
    await deleteDoc(doc(db, "Subject", id));
    await getSubject();
  }

    return (
        <>
   <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Manage Subjects</h3>
                    </div>
                    
                    <div className="card-body">
                        <table id="example2" className="table table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Subject</th>
                                    <th>Staff</th>
                                    <th>Course</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                            {  
                                        allSubject.map((doc) => (
                                          
                                                 <tr key={doc.id}>
                                            <td>{i++}</td>
                                            <td>{doc.SubjectName}</td>
                                            <td>{doc.Staff}</td>
                                            <td>{doc.Course}</td>
                                          
                                            <td>{ <button onClick={()=>deletSubject(doc.id)} className="btn btn-danger btn-block">Delet</button>}</td>
                                            
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