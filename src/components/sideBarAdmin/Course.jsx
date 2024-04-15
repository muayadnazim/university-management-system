import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../config/firebase";
import { useState } from "react";
export default function Course () {

 const [course , setCourse]=useState("");
  
const addCourse = async () => { 
    try {
        // const docRef =
         await addDoc(collection(db, "Course"), {
          CourseName: course,
         
        });
       
       
        // console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

     setCourse("");
}

    return (
        <>
        
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
              
                <div className="card card-dark">
                    <div className="card-header">
                        <h3 className="card-title">Add Course</h3>
                    </div>

                  
   
    
     <div className="card-body">


        
        <div className="form-group">
            
            <label htmlFor="id_name">Name:</label>
            <input value={course} onChange={(e)=>setCourse(e.target.value)} type="text" name="name" maxLength="120" className="form-control" required="" id="id_name"></input> 

        </div>
        




    </div>
   
    <div className="card-footer">
        <button onClick={addCourse} type="submit" className="btn btn-success btn-block">
            
            Add Course
            

        </button>
    </div>

                </div>
            

            </div>
        </div>
    </div>
        </>
    )


}