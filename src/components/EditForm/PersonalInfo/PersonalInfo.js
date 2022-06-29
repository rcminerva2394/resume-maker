import React from "react";

const PersonalInfo = ({ personalInfo, personalInfoChangeHandler }) => {
  return (
    <section>
      <div>
        <input
          type="text"
          placeholder="First name"
          name="firstname"
          value={personalInfo.firstname}
          onChange={(e) => personalInfoChangeHandler(e)}
        ></input>
         <input
          type="text"
          placeholder="last name"
          name="lastname"
          value={personalInfo.lastname}
          onChange={(e) => personalInfoChangeHandler(e)}
        ></input>
        <input
          type="text"
          placeholder="Job Role"
          name="job"
          value={personalInfo.job}
          onChange={(e) => personalInfoChangeHandler(e)}
        ></input>
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={personalInfo.email}
          onChange={(e) => personalInfoChangeHandler(e)}
        ></input>
        <input
          type="text"
          placeholder="Contact Number"
          name="number"
          value={personalInfo.number}
          onChange={(e) => personalInfoChangeHandler(e)}
        ></input>
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={personalInfo.address}
          onChange={(e) => personalInfoChangeHandler(e)}
        ></input>
      </div>
    </section>
  );
};

export default PersonalInfo;
