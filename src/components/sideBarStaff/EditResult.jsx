export default function EditResult() {
  return (
    <>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              
                
                <div className="card card-dark">
                  <div className="card-header">
                    <h3 className="card-title">Edit Students Result</h3>
                  </div>

                  <div className="card-body">
                    <label htmlFor="id_session_year">Session Year:</label>

                    <select
                      name="session_year"
                      className="form-control"
                      required=""
                      id="id_session_year"
                    >
                      <option value="">
                        ---------
                      </option>

                      <option value="1">From 2024-01-22 to 2025-02-22</option>
                    </select>

                    <label htmlFor="id_subject">Subject:</label>

                    <select
                      name="subject"
                      className="form-control"
                      required=""
                      id="id_subject"
                    >
                      <option value="" >
                        ---------
                      </option>

                      <option value="2">datad</option>
                    </select>

                    <label htmlFor="id_student">Student:</label>

                    <select
                      name="student"
                      className="form-control"
                      required=""
                      id="id_student"
                    >
                      
                      <option value="1">nazims muayads </option>
                    </select>

                    <label htmlFor="id_test" >
                      Test:
                    </label>

                    <input
                      type="number"
                      name="test"
                      value="0"
                      step="any"
                      className="form-control"
                      required=""
                      id="id_test"
                     
                    />

                    <label htmlFor="id_exam" >
                      Exam:
                    </label>

                    <input
                      type="number"
                      name="exam"
                      value="0"
                      step="any"
                      className="form-control"
                      required=""
                      id="id_exam"
                    
                    />
                  </div>

                  <div className="card-footer">
                    <button
                     
                      id="update_result"
                      className="btn btn-primary btn-block"
                     
                    >
                      Update Result
                    </button>
                  </div>
                </div>
            
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
