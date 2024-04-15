 import { addDoc ,collection, getDocs } from "firebase/firestore"; 
 import { db } from "../config/firebase";



 import { useState ,useEffect} from "react";

 

export default function AddSubject() {

    const [allStaff,setStaff]=useState([]);
    const StaffCollectionsRef = collection(db, "Staff");
    
    useEffect(()=> {

        const getCourse = async () =>{
          try{
            const data = await getDocs(StaffCollectionsRef);
            const filteredData =data.docs.map((doc)=>({
                ...doc.data(),
                id:doc.id,
             
            }));
            setStaff(filteredData)
        
          }catch(err){
        console.error(err);
          }
        }
        getCourse();
    },[]);

    const [allCourse,setCourse]=useState([]);
    const courseCollectionsRef = collection(db, "Course");
    
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

    const [data,setData]=useState({
        Name:"",
        Staff:"",
        Course:"",
    });

    const  handleInputChange =(event)=> {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        setData((preData)=>({
            ...preData,
            [name]: value
          }));
      }


      const addSubject =async () =>{
        await addDoc(collection(db, "Subject" ), {
            SubjectName:data.Name,
            Staff:data.Staff,
            Course:data.Course,
             });
      }
    

    return (
        <>
 <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
               
                <div className="card card-dark">
                    <div className="card-header">
                        <h3 className="card-title">Add Subject</h3>
                    </div>

                  
   
    <div className="card-body">


        
        <div className="form-group">
            
            <label htmlFor="id_name">Name:</label>
            <input 
             name="Name"
             type="text"
             value={data.Name}
             onChange={handleInputChange}
             maxLength="120" className="form-control"/>

        </div>
        
        <div className="form-group">
            
            <label htmlFor="id_staff">Staff:</label>
            <select
            name="Staff"
            type="text"
            value={data.Staff}
            onChange={handleInputChange}
            className="form-control" >
  <option value="" selected="">---------</option>

  {  
               allStaff.map((doc) => (

              
                                           
              <option key={doc.id} value={doc.FName}>{doc.FName}</option>
                 
                                             
        )
                                           
         )
     }

</select>

        </div>
        
        <div className="form-group">
            
            <label htmlFor="id_course">Course:</label>
            <select 
            name="Course"
            type="text"
            value={data.Course}
            onChange={handleInputChange}
            className="form-control" >
  <option value="" selected="">---------</option>

  {  
               allCourse.map((doc) => (

              
                                           
              <option key={doc.id} value={doc.CourseName}>{doc.CourseName}</option>
                 
                                             
        )
                                           
         )
     }

</select>

        </div>
        




    </div>
  

    <div className="card-footer">
        <button  onClick={addSubject} className="btn btn-success btn-block">
            
            Add Subject
            

        </button>
    </div>

                </div>
               

            </div>
        </div>
    </div>
        </>
    )


}