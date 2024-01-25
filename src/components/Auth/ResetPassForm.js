import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ResetPasswordForm() {
  const { resetId, token } = useParams();
  const [isMsgSent, setMsgSentstatus] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetError, setResetError] = useState(null);
  const navigate = useNavigate();

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    try {
      if (newPassword !== confirmPassword) {
        setResetError("Passwords do not match");
        return;
      }

      const response = await fetch(
        `http://localhost:30001/forgot/password/resetpassword/${resetId}/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newPassword, confirmPassword }),
        }
      );

      if (response.ok) {
        setMsgSentstatus(true);
        setNewPassword("");
        setConfirmPassword("");
        alert("password reset successfully");
        navigate("/login");
      } else {
        const data = await response.json();
        setResetError(data.error || "Failed to reset password");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      setResetError("Internal Server Error");
    }
  };

  return (
    <section class="vh-100" style={{ fontFamily: "sanserif", marginRight:"10px" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex align-items-center justify-content-center h-100">
          <div class="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="img-fluid"
            />
          </div>
          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1" style={{ fontFamily: "sanserif", marginRight:"10px" }}>
            <h2>Reset Password</h2>
            {isMsgSent ? (
              <div class=" alert alert-success" role="alert">
                You have reset password successfully !!
              </div>
            ) : (
              ""
            )}
            <form onSubmit={(e) => resetPasswordHandler(e)}>
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example13"
                  class="form-control form-control-lg"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <label class="form-label" for="form1Example13" style={{ fontFamily: "sanserif", marginRight:"10px" }}>
                  Type new password
                </label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  class="form-control form-control-lg"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label class="form-label" for="form1Example23" style={{ fontFamily: "sanserif", marginRight:"10px" }}>
                  confirm Password
                </label>
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-block" style={{ fontFamily: "sanserif", marginRight:"10px" }}>
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResetPasswordForm;
