import { doc, setDoc ,collection, getDocs } from "firebase/firestore"; 
import { db } from "../config/firebase";



 import { useState ,useEffect} from "react";
//  import { auth } from "./config";
//  import { signInWithEmailAndPassword ,signOut } from "firebase/auth";

 import { initializeApp, getApp, getApps, deleteApp } from 'firebase/app';
 import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


export default function AddStudent () {
    const [allCourse,setCourse]=useState([]);
    const [allSession,setSession]=useState([]);
    const courseCollectionsRef = collection(db, "Course");
    const sessionCollectionsRef = collection(db, "Session");
    
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

        const getSession = async () =>{
            try{
              const data = await getDocs(sessionCollectionsRef);
              const filteredData =data.docs.map((doc)=>({
                  ...doc.data(),
                  id:doc.id,
               
              }));
              setSession(filteredData)
          
            }catch(err){
          console.error(err);
            }
          }
          getSession();
        getCourse();
        
    },[]);

const [data,setData]=useState({
    Adress:"",
    Email:"",
    FName:"",
    Gender:"",
    LName:"",
    Password:"",
    Course:"",
    Session:"",
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
 


const addStdent = async () => {
    try {

        const firebaseConfig = {
            apiKey: "AIzaSyCI6OseGjBB8EuRHLaHXo_qC-A0cuEiJW4",
            authDomain: "universitymanagmentdiyala.firebaseapp.com",
            projectId: "universitymanagmentdiyala",
            storageBucket: "universitymanagmentdiyala.appspot.com",
            messagingSenderId: "682197958980",
            appId: "1:682197958980:web:7ff13834e38a2001a91711"
          };
        // Initialize a temporary Firebase app
  const tempApp = initializeApp(firebaseConfig, 'TempApp');
  const tempAuth = getAuth(tempApp);

  // Function to create user without signing in

    try {
       
    var   userCredential = await createUserWithEmailAndPassword(tempAuth, data.Email, data.Password);
    //   console.log('User created:', userCredential.user.uid);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  
    // Delete the temporary app
    if (getApps().find(app => app.name === 'TempApp')) {
      const appToDelete = getApp('TempApp');
      deleteApp(appToDelete).then(() => {
       
      });
    }


       

        
        // const docRef =
         await setDoc(doc(db, "Student", userCredential.user.uid), {
       Adress : data.Adress,
       Email:data.Email,
       FName:data.FName,
       Gender:data.Gender,
       LName:data.LName,
       Password:data.Password,
         Course:data.Course,
         Session:data.Session,
        });
       
       
        // console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      setData({
        Adress:"",
        Email:"",
        FName:"",
        Gender:"",
        LName:"",
        Password:"",
        Course:"",
        Session:"",
    });
}


    return (
        <>
 <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
             
                <div className="card card-dark">
                    <div className="card-header">
                        <h3 className="card-title">Add Student</h3>
                    </div>

                    
    
    <div className="card-body">


        
        <div className="form-group">
            
            <label htmlFor="id_first_name">First name:</label>
            <input 
             name="FName"
             type="text"
             value={data.FName}
             onChange={handleInputChange}
            className="form-control"></input>

        </div>
        
        <div className="form-group">
            
            <label htmlFor="id_last_name">Last name:</label>
            <input 
             name="LName"
             type="text"
             value={data.LName}
             onChange={handleInputChange}
            className="form-control" ></input>

        </div>
        
        <div className="form-group">
            
            <label htmlFor="id_email">Email:</label>
            <input 
               name="Email"
               type="text"
               value={data.Email}
               onChange={handleInputChange}
            
             maxLength="320" className="form-control" 
             ></input>

        </div>
        
        <div className="form-group">
            
            <label htmlFor="id_gender">Gender:</label>
            <select 
            name="Gender"
            type="text"
            value={data.Gender}
            onChange={handleInputChange}
          className="form-control" >
         <option value="">--------</option>        
        <option value="M">Male</option>

         <option value="F">Female</option>

</select>

        </div>
        
        <div className="form-group">
            
            <label htmlFor="id_password">Password:</label>
            <input 
            
            name="Password"
            type="text"
            value={data.Password}
            onChange={handleInputChange}
            className="form-control" ></input>

        </div>
        
        
        
        <div className="form-group">
            
            <label htmlFor="id_address">Address:</label>
            <textarea 
             name="Adress"
             type="text"
             value={data.Adress}
             onChange={handleInputChange}
            cols="40" rows="10" className="form-control" ></textarea>

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
        
        <div className="form-group">
            
            <label htmlFor="id_session">Session:</label>
            <select  
            name="Session"
            type="text"
            value={data.Session}
            onChange={handleInputChange}
            className="form-control" >
            <option value="" selected="">---------</option>
            {  
               allSession.map((doc) => (

              
                                           
              <option key={doc.id} value={doc.StartYear}>{doc.StartYear}{">>"+doc.EndYear}</option>
                 
                                             
        )
                                           
         )
     }
</select>

        </div>
        




    </div>
 

    <div className="card-footer">
        <button  onClick={addStdent} className="btn btn-success btn-block">
            
            Add Student
            

        </button>
    </div>

                </div>
              

            </div>
        </div>
    </div>
        </>
    )


}