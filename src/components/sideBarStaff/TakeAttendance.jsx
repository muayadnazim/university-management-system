export default function StudentHome() {
  return (
    <>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-dark">
                <div className="card-header">
                  <h3 className="card-title">Take Attendance</h3>
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
                    <label>Session Year</label>
                    <select
                      name="session"
                      id="session"
                      className="form-control"
                    >
                      <option value="">----</option>

                      <option value="1">From 2024-01-22 to 2025-02-22 </option>
                    </select>
                  </div>
                </div>

                <div className="card-footer">
                  <button
                    type="button"
                    id="fetch_student"
                    className="btn btn-success btn-block"
                  >
                    Fetch Students
                  </button>
                  <div className="form-group" id="student_data">
                    <hr />
                    <div className="form-group"></div>
                    <div className="form-group">
                      {" "}
                      <label>Attendance Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="attendance_date"
                        id="attendance_date"
                      />
                      <div className="row">
                        <div className="col-lg-3">
                          <div className="form-check custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              checked="checked"
                              name="student_data[]"
                              value="1"
                              id="checkbox1"
                            />{" "}
                            <label
                              htmlFor="checkbox1"
                              className="custom-control-label"
                            >
                              nazims muayads
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
      </section>
    </>
  );
}
