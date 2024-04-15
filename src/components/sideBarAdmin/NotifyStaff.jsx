export default function NotifyStaff () {

    return (
        <>
<div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Send Notifications To Staff</h3>
                    </div>
                  
                    <div className="card-body">
                        <table id="example2" className="table table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Gender</th>
                                    <th>Course</th>
                                    <th>Avatar</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                    <td>1</td>
                                    <td>nazim, muayad</td>
                                    <td>muayad@gmail.com</td>
                                    <td>M</td>
                                    <td>data</td>
                                    <td>
                                        
                                       
                                        
                                    </td>
                                    <td><button data-toggle="modal" data-target="#myModal" className="btn btn-primary show_notification" value="2">Send Notification</button> 
                                    </td>
                                </tr>
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