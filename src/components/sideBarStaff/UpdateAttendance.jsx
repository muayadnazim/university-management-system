export default function UpdateAttendance() {
  return (
    <>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-dark">
                <div className="card-header">
                  <h3 className="card-title">Update Attendance</h3>
                </div>

                <div className="card-body">
                  <div className="form-group">
                    <label>Subject</label>
                    <select
                      name="subject"
                      className="form-control"
                      id="subject"
                    >
                      <option value="">----</option>

                      <option value="2">datad</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Session</label>
                    <select
                      name="session"
                      className="form-control"
                      id="session"
                    >
                      <option value="">----</option>

                      <option value="1">From 2024-01-22 to 2025-02-22</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <button
                      type="button"
                      id="fetch_attendance"
                      className="btn btn-success btn-block"
                    >
                      Fetch Attendance
                    </button>
                  </div>

                  <div className="form-group" id="attendance_block">
                    <div className="form-group">
                      <label>Attendance Date</label>
                      <select
                        name="attendance_date"
                        id="attendance_date"
                        className="form-control"
                      >
                        <option value="2">2024-04-02</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <div id="fetch_student_block">
                        <button
                          type="button"
                          id="fetch_student"
                          className="btn btn-success btn-block"
                        >
                          Fetch Students
                        </button>
                      </div>
                      <div id="student_data" className="card-footer">
                        <hr />
                        <div className="form-group"></div>
                        <div className="form-group">
                          {" "}
                          <label>Student Attendance</label>
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="form-check custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  checked="checked"
                                  name="student_data[]"
                                  value="3"
                                  id="checkbox3"
                                />{" "}
                                <label
                                  htmlFor="checkbox3"
                                  className="custom-control-label"
                                >
                                  nazims muayads [Present]{" "}
                                </label>
                              </div>{" "}
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <button
                            id="save_attendance"
                            className="btn btn-success"
                            type="button"
                          >
                            Save Attendance
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
