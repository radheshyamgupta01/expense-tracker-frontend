import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Setting() {
  const [uploadImage, setUploadImage] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [image, setImage] = useState(null);
  const [fullName, setFullName] = useState("example");
  const [email, setEmail] = useState("example@example.com");
  const [position, setPosition] = useState("Full stack developer");
  const [mobile, setMobile] = useState("123456789");
  const [address, setAddress] = useState("Kandivali, Mumbai, India");
  const [editProfile, setEditProfile] = useState(false);
  const getToken = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  const editProfileHandler = () => {
    setEditProfile(!editProfile);
    setIsEditing(!isEditing);
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setImage(file);
  };

  const uploadImageHandler = () => {
    setUploadImage(!uploadImage);
    editProfileHandler();
  };
  // const formSubmitHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("http://localhost:30001/expense/profile", {
  //       method: "post",
  //       body: JSON.stringify({
  //         image: image,
  //         name: fullName,
  //         email: email,
  //         position: position,
  //         mobile: mobile,
  //         address: address,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${getToken.token}`,
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     console.log(data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  const formSubmitHandler = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append("image", image); // Assuming image is a File object
      formData.append("name", fullName);
      formData.append("email", email);
      formData.append("position", position);
      formData.append("mobile", mobile);
      formData.append("address", address);
  
      const response = await fetch("http://localhost:30001/expense/profile", {
        method: "post",
        body: formData,
        headers: {
          Authorization: `Bearer ${getToken.token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  





  const closeHandler = () => {
    setIsEditing(false);
  };
  const BackHandler = () => {
    navigate("/expense");
  };
  return (
    <section>
      <div className="container py-5 bg-gray-100">
        <div className="row">
          {uploadImage ? (
            <div className="col-lg-4 mt-3">
              <label htmlFor="imageInput" className="form-label">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: "150px" }}
                />
              </label>
              <input
                type="file"
                className="form-control"
          
                onChange={handleImageChange}
              />

              <button type="submit" className="btn btn-outline-primary mt-2" onClick={(e)=>formSubmitHandler(e)} encType="multipart/form-data">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-outline-primary mt-2 ms-4"
                onClick={(e) => {
                  e.preventDefault();
                  setIsEditing(!isEditing);
                  setUploadImage(!uploadImage);
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h5 className="my-3">Radheshyam</h5>

                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <p className="text-muted mb-4">Mumbai, Kandivali , India</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button
                      type="button W-[48]"
                      className="btn btn-primary"
                      style={{ width: "200px" }}
                      onClick={BackHandler}
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="col-lg-8">
            <div className="row">
              <form onSubmit={(e) => formSubmitHandler(e)} encType="multipart/form-data">
                <div className="col-md-6">
                  <div className="card mb-md-0">
                    <div className="card ">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0"> Name</p>
                          </div>

                          <div className="col-sm-9">
                            {isEditing ? (
                              <div className="form-outline" data-mdb-input-init>
                                <input
                                  type="text"
                                  placeholder="Enter Full Name"
                                  className="form-control"
                                  value={fullName}
                                  required
                                  onChange={(e) => setFullName(e.target.value)}
                                />
                              </div>
                            ) : (
                              <p className="text-muted mb-0">Radheshyam</p>
                            )}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Email</p>
                          </div>
                          <div className="col-sm-9">
                            {isEditing ? (
                              <div className="form-outline" data-mdb-input-init>
                                <input
                                  type="text"
                                  placeholder="Enter Email"
                                  className="form-control"
                                  required
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>
                            ) : (
                              <p className="text-muted mb-0">
                                example@example.com
                              </p>
                            )}
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Position</p>
                          </div>
                          <div className="col-sm-9">
                            {isEditing ? (
                              <div className="form-outline" data-mdb-input-init>
                                <input
                                  type="text"
                                  placeholder="Enter Position"
                                  className="form-control"
                                  value={position}
                                  required
                                  onChange={(e) => setPosition(e.target.value)}
                                />
                              </div>
                            ) : (
                              <p className="text-muted mb-0">
                                Full stack Developer
                              </p>
                            )}
                          </div>
                        </div>
                        <hr className="d-none"></hr>

                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Mobile</p>
                          </div>
                          <div className="col-sm-9">
                            {isEditing ? (
                              <div className="form-outline" data-mdb-input-init>
                                <input
                                  type="text"
                                  placeholder="Enter Mobile"
                                  className="form-control"
                                  required
                                  value={mobile}
                                  onChange={(e) => setMobile(e.target.value)}
                                />
                              </div>
                            ) : (
                              <p className="text-muted mb-0">123456789</p>
                            )}
                          </div>
                        </div>
                        <hr />
                        <div className="row mb-4">
                          <div className="col-sm-3">
                            <p className="mb-0">Address</p>
                          </div>
                          <div className="col-sm-9">
                            {isEditing ? (
                              <div className="form-outline" data-mdb-input-init>
                                <input
                                  type="text"
                                  placeholder="Enter Adress"
                                  required
                                  className="form-control"
                                  value={address}
                                  onChange={(e) => setAddress(e.target.value)}
                                />
                              </div>
                            ) : (
                              <p className="text-muted mb-0">
                                Kandivali, Mumbai, India
                              </p>
                            )}
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary mt-4 me-4 ms-2"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsEditing(!isEditing);
                            setUploadImage(!uploadImage);
                          }}
                        >
                          {isEditing ? "Close" : "Edit"}
                        </button>
                        <button
                          type="submit"
                          className="btn btn-outline-primary mt-4 me-4 ms-2"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Setting;
