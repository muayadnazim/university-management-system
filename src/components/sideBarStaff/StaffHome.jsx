
export default function StaffHome () {

    return (
        <>
      <div className="row">
            <div className="col-lg-3 col-6">
               
                <div className="small-box bg-info">
                    <div className="inner">
                        <h3>1</h3>

                        <p>Total Students</p>
                    </div>
                    <div className="icon">
                      <i className="nav-icon fas fa-user-graduate"></i>
                    </div>
                   
                </div>
            </div>
          
            <div className="col-lg-3 col-6">
              
                <div className="small-box bg-success">
                    <div className="inner">
                        <h3>1</h3>

                        <p>Total Attendance Taken</p>
                    </div>
                    <div className="icon">
                      <i className="nav-icon fas fa-calendar-alt"></i>
                    </div>
                   
                </div>
            </div>
          
            <div className="col-lg-3 col-6">
             
                <div className="small-box bg-maroon">
                    <div className="inner">
                        <h3>0</h3>

                        <p>Total Leave Applied</p>
                    </div>
                    <div className="icon">
                      <i className="nav-icon fas fa-sign-out-alt"></i>
                    </div>
                   
                </div>
            </div>
           
            <div className="col-lg-3 col-6">
              
                <div className="small-box bg-danger">
                    <div className="inner">
                        <h3>1</h3>

                        <p>Total Subjects</p>
                    </div>
                    <div className="icon">
                      <i className="nav-icon fas fa-book"></i>
                    </div>
                   
                </div>
            </div>
           
        </div>
        </>
    )
}