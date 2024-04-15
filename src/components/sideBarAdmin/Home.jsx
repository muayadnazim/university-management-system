export default function Home () {

    return (
        <>
        <div className="row">
            <div className="col-lg-3 col-6">
              
                <div className="small-box bg-info">
                    <div className="inner">
                        <h3>0</h3>

                        <p>Total Students</p>
                    </div>
                    <div className="icon">
                      <i className="nav-icon fas fa-user-graduate"></i>
                    </div>
                    <a href="/student/manage/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>

                </div>
            </div>
       
            <div className="col-lg-3 col-6">
             
                <div className="small-box bg-success">
                    <div className="inner">
                        <h3>0</h3>

                        <p>Total Staff</p>
                    </div>
                    <div className="icon">
                      <i className="nav-icon fas fa-users"></i>
                    </div>
                    <a href="/staff/manage/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
           
            <div className="col-lg-3 col-6">
          
                <div className="small-box bg-purple">
                    <div className="inner">
                        <h3>0</h3>

                        <p>Total Course</p>
                    </div>
                    <div className="icon">
                      <i className="nav-icon fas fa-th-list"></i>
                    </div>
                    <a href="/course/manage/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
           
            <div className="col-lg-3 col-6">
            
                <div className="small-box bg-danger">
                    <div className="inner">
                        <h3>0</h3>

                        <p>Total Subjects</p>
                    </div>
                    <div className="icon">
                      <i className="nav-icon fas fa-book"></i>
                    </div>
                    <a href="/subject/manage/" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                </div>
            </div>
       
        </div>
         
        </>
    )


}