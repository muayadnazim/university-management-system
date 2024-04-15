


export default function AddResult() {




  return (
    <>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <form method="POST">
                <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  value="GJ0c1WhRXxH4u5d1HaokmjZVoxqnXBmOlWDe4TUmZ1XlbAP8ougLKCgH0lvtqzWm"
                />
                <div className="card card-dark">
                  <div className="card-header">
                    <h3 className="card-title">Result Upload</h3>
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

                        <option value="1">
                          From 2024-01-22 to 2025-02-22{" "}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="card-footer">
                    <button
                      type="button"
                      id="fetch_student"
                      className="btn btn-primary btn-block"
                    >
                      Fetch Students
                    </button>
                    <div className="form-group" id="student_data">
                      <hr />
                      <div className="form-group">
                        {" "}
                        <label> Student List</label>{" "}
                        <select
                          className="student_list form-control"
                          name="student_list"
                        >
                          {" "}
                          <option value="1">nazims muayads </option>
                        </select>
                      </div>
                      <div className="form-group row">
                        {" "}
                        <div className="col-md-6">
                          {" "}
                          <label> Test Score </label>{" "}
                          <input
                            className="form-control"
                            name="test"
                            placeholder="Test Score"
                            max="40"
                            min="0"
                            required=""
                            type="number"
                          />
                        </div>
                        <div className="col-md-6">
                          <label> Exam Score </label>{" "}
                          <input
                            className="form-control"
                            placeholder="Exam Score"
                            name="exam"
                            max="60"
                            min="0"
                            required=""
                            type="number"
                          />{" "}
                        </div>
                      </div>
                      <div className="form-group">
                        <button
                          id="save_attendance"
                          className="btn btn-success"
                          type="submit"
                        >
                          Save Result
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
