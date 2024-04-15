export default function UpdatepProfile() {
  return (
    <>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-dark">
                <div className="card-header">
                  <h3 className="card-title">View/Edit Profile</h3>
                </div>

                <form role="form" method="POST" encType="multipart/form-data">
                  <input
                    type="hidden"
                    name="csrfmiddlewaretoken"
                    value="WxHl4gSOKrCGZefNohhdTYUKAAft6Goc8lWbXAVHe0zFsATNP2EYMBdcQ0HZ2w8H"
                  ></input>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="id_first_name">First name:</label>
                      <input
                        type="text"
                        name="first_name"
                        className="form-control"
                        required=""
                        id="id_first_name"
                      ></input>
                    </div>

                    <div className="form-group">
                      <label htmlFor="id_last_name">Last name:</label>
                      <input
                        type="text"
                        name="last_name"
                        className="form-control"
                        required=""
                        id="id_last_name"
                      ></input>
                    </div>

                    <div className="form-group">
                      <label htmlFor="id_email">Email:</label>
                      <input
                        type="email"
                        name="email"
                        value="admin@gmail.com"
                        maxLength="320"
                        className="form-control"
                        required=""
                        id="id_email"
                      ></input>
                    </div>

                    <div className="form-group">
                      <label htmlFor="id_gender">Gender:</label>
                      <select
                        name="gender"
                        className="form-control"
                        id="id_gender"
                      >
                        <option value="M">Male</option>

                        <option value="F">Female</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="id_password">Password:</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Fill this only if you wish to update password"
                        id="id_password"
                      ></input>
                    </div>

                    <div className="form-group">
                      <label htmlFor="id_profile_pic">Profile pic:</label>
                      <input
                        type="file"
                        name="profile_pic"
                        accept="image/*"
                        className="form-control"
                        required=""
                        id="id_profile_pic"
                      ></input>
                    </div>

                    <div className="form-group">
                      <label htmlFor="id_address">Address:</label>
                      <textarea
                        name="address"
                        cols="40"
                        rows="10"
                        className="form-control"
                        required=""
                        id="id_address"
                      ></textarea>
                    </div>
                  </div>

                  <div className="card-footer">
                    <button type="submit" className="btn btn-success btn-block">
                      Update Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
