import React from "react";
import "./register.scss";

const Register = () => {
  return (
    <div>
      <div className="form-group">
        <label>Phone Number</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>NIC Number</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>First Name</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Date of Birth</label>
        <input type="text" />
      </div>
      <div className="form-group">
        <label>Gender</label>
        <div>
          <input type="radio" name="gender" value="male" /> Male
          <input type="radio" name="gender" value="female" /> Femal
        </div>
      </div>
    </div>
  );
};

export default Register;
