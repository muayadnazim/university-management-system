import { collection, getDocs ,deleteDoc,doc} from "firebase/firestore";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";

export default function ManageSession () {
    let i=1;

    const [allSession,setSubject]=useState([]);

   const SessionCollectionsRef = collection(db, "Session");
    const getSession = async () =>{
       try{
          const data = await getDocs(SessionCollectionsRef);
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

       const getSession = async () =>{
         try{
           const data = await getDocs(SessionCollectionsRef);
           const filteredData =data.docs.map((doc)=>({
               ...doc.data(),
               id:doc.id,
            
           }));
           setSubject(filteredData)
       
         }catch(err){
       console.error(err);
         }
       }
       getSession();
   },[]);
   const deletSession = async (id) => {
    await deleteDoc(doc(db, "Session", id));
    await getSession();
  }
    return (
        <>
   <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Manage Sessions</h3>
                    </div>
                 
                    <div className="card-body">
                        <table id="example2" className="table table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Start</th>
                                    <th>End</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {  
                                        allSession.map((doc) => (
                                          
                                                 <tr key={doc.id}>
                                            <td>{i++}</td>
                                            <td>{doc.StartYear}</td>
                                            <td>{doc.EndYear}</td>
                                           
                                          
                                            <td>{ <button onClick={()=>deletSession(doc.id)} className="btn btn-danger btn-block">Delet</button>}</td>
                                            
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