export default function StudentHome () {

    return (
        <>
        <section className="content">
    <div className="container-fluid">
 
        <div className="row">
            <div className="col-lg-3 col-6">
              
                <div className="small-box bg-info">
                    <div className="inner">
                        <h3>1</h3>

                        <p>Total Attendance</p>
                    </div>
                    <div className="icon">
                      <i className="nav-icon fas fa-calendar-alt"></i>
                    </div>
                    
                </div>
            </div>
          
            <div className="col-lg-3 col-6">
               
                <div className="small-box bg-success">
                    <div className="inner">
                        <h3>100 %</h3>

                        <p>Percentage Present</p>
                    </div>
                    <div className="icon">
                      <i className="nav-icon fas fa-calendar-check"></i>
                    </div>
                    
                </div>
            </div>
        
            <div className="col-lg-3 col-6">
              
                <div className="small-box bg-danger">
                    <div className="inner">
                        <h3>0 %</h3>

                        <p>Percentage Absent</p>
                    </div>
                    <div className="icon">
                      <i className="nav-icon fas fa-calendar-minus"></i>
                    </div>
                    
                </div>
            </div>
        
            <div className="col-lg-3 col-6">
             
                <div className="small-box bg-primary">
                    <div className="inner">
                        <h3>1</h3>

                        <p>Total Subject</p>
                    </div>
                    <div className="icon">
                      <i className="nav-icon fas fa-book"></i>
                    </div>
                    
                </div>
            </div>
          
        </div>
        
                        </div>  
                        </section>
        </>
    )
}