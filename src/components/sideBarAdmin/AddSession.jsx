import { addDoc ,collection } from "firebase/firestore"; 
import { db } from "../config/firebase";



import { useState } from "react";

export default function AddSession () {

    const [data,setData]=useState({
        StartYear:"",
        EndYear:"",
       
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


      const addSession =async () =>{
        await addDoc(collection(db, "Session" ), {
            StartYear:data.StartYear,
            EndYear:data.EndYear,
           
             });
    setData({
        StartYear:"",
        EndYear:"",
       
    });  }

    return (
        <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
           
                <div className="card card-dark">
                    <div className="card-header">
                        <h3 className="card-title">Add Session</h3>
                    </div>

                  
    
    <div className="card-body">


        
        <div className="form-group">
            
            <label htmlFor="id_start_year">Start year:</label>
            <input 
             name="StartYear"
             value={data.StartYear}
             onChange={handleInputChange}
            type="date"  className="form-control"></input>

        </div>
        
        <div className="form-group">
            
            <label htmlFor="id_end_year">End year:</label>
            <input 
            name="EndYear"
            value={data.EndYear}
            onChange={handleInputChange}
            
            type="date"  className="form-control" ></input>

        </div>
        




    </div>
  

    <div className="card-footer">
        <button onClick={addSession} className="btn btn-success btn-block">
            
            Add Session
            

        </button>
    </div>

                </div>
               

            </div>
        </div>
    </div>
        </>
    )


}