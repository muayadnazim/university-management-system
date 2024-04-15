export default function ViewAttendance () {

    return (
        <>
   <section className="content">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
              
                <div className="card card-dark">
                    <div className="card-header">
                        <h3 className="card-title">View Attendance</h3>
                    </div>

                    <div className="card-body">



                        <div className="form-group">
                            <label>Subject</label>
                            <select name="subject" className="form-control" id="subject">
                                <option value="">----</option>
                                
                                <option value="1">datasrtature</option>
                                
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Session</label>
                            <select name="session" className="form-control" id="session">
                                <option value="">----</option>
                                
                                <option value="1">From 2024-01-22 to 2025-02-22</option>
                                
                            </select>
                        </div>
                       
           
                    
                        
                               
                          
                </div>
              

            </div>
        </div>
    </div>
</div></section>
        </>
    )


}