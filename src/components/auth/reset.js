import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PasswordReset() {
  const { resetToken } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [cPassword, setcPassword] = useState("");
  const [message, setMessage] = useState("");
  console.log(resetToken);
  const baseUrls = "http://localhost:8000";
  const baseUrl = "https://server.youthbuzz.in";

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/v1/user/reset/${resetToken}`,
        {
          password: newPassword,
          confirm_password: cPassword,
        }
      );

      setMessage(response.data.message);
    } catch (error) {
      console.error("Error resetting password:", error);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div className="edit-main2">
        <h4>Password Reset</h4>
        <p style={{ color: "white" }}>Reset your password:</p>
        <form onSubmit={handleResetPassword}>
          <div>
            <input
              className="input-field"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="password"
            />
          </div>
          <div>
            <input
              className="input-field"
              type="password"
              value={cPassword}
              onChange={(e) => setcPassword(e.target.value)}
              placeholder="confirm password"
            />
          </div>

          <button className="button-71" type="submit">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default PasswordReset;
