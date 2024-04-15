





import '../css/adminPanel.css'
import { useState } from "react";
 import { auth } from "./config/firebase";
 import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {

   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");




    const  sginIn =   () => {   
    
      signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in 
      //   const user = userCredential.user;
      //   console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
      });
    
 
    }

   //  let user = auth?.currentUser?.email ;
   //  console.log(user);
   
  return (
    <>
    <div  className='log-in'>

       <h1 className='head'><b>University</b> Management System</h1>
 
       

         
            <div  >
                <input

               
                 type="mail" 
                 placeholder="Enter Email..."
                 onChange={(e)=>setEmail(e.target.value)}
                 /></div>
            <div >
               <input 
               
               type="password" 
               placeholder="Enter Password..."
               onChange={(e)=>setPassword(e.target.value)}
               /></div>
            <div >


            
               <button className='buttonLog'  onClick={sginIn}>login</button>
               
               </div>
      
       
       
       
   




    </div>

  
    
    </>
  );
}