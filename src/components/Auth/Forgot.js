import React, { useState } from "react";

function Forget() {
  const [email, setEmail] = useState("");
  const [msgSentStatus, setMsgstatus] = useState(false);
  const forgotPasswordHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:30001/forgot/password/forgotpassword",
      {
        method: "post",
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    if (data.success) {
      setMsgstatus(true);

      setEmail("");
    }
    console.log(data);
    setEmail("");
  };
  return (
    <div className="container p-5  mt-4">
      <div className="row ">
        {msgSentStatus ? (
          <div class="alert alert-success" role="alert">
            Massage sent successfully check your inbox
          </div>
        ) : (
          ""
        )}
        <div className="col-md-4 offset-md-4 ">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="text-center">
                <h3>
                  <i className="fa fa-lock fa-4x"></i>
                </h3>
                <h2 className="text-center"   style={{ fontFamily: "sanserif", marginRight: "10px" }}>Forgot Password?</h2>
                <p>You can reset your password here.</p>
                <div className="panel-body">
                  <form
                    id="register-form"
                    role="form"
                    autoComplete="off"
                    className="form "
                    onSubmit={(e) => forgotPasswordHandler(e)}
                  >
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="glyphicon glyphicon-envelope color-blue"></i>
                        </span>
                        <input
                          id="email"
                          name="email"
                          placeholder="Email Address"
                          className="form-control"
                          type="email"
                          style={{ fontFamily: "sanserif" }}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="form-group mt-2">
                      <button
                        className="btn btn-lg btn-danger btn-block form-control"
                        type="submit"   style={{ fontFamily: "sanserif" }}
                      >
                        Reset Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forget;
