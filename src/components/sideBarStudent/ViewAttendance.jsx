export default function ViewAttendance() {
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
                    <label>Select Subject</label>
                    <select id="subject" className="form-control">
                      <option value="">----</option>

                      <option value="1">datasrtature </option>

                      <option value="2">datad </option>
                    </select>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>Start Date</label>
                        <input
                          type="date"
                          className="form-control"
                          placeholder="Start Date"
                          name="start_date"
                          required=""
                          id="start_date"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label>End Date</label>
                        <input
                          type="date"
                          className="form-control"
                          placeholder="End Date"
                          name="end_date"
                          id="end_date"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      id="fetch_attendance"
                      className="btn btn-success btn-block"
                    >
                      Fetch Attendance Data
                    </button>
                  </div>
                </div>

                <div className="card-footer">
                  <div className="row" id="attendance_data">
                    <div className="col-lg-3 attendance_div_green">
                      <b>2024-04-25</b>
                      <br />
                      Present
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
