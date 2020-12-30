import React, { useState } from "react";
import { db } from "./firebase";
import firebase from "firebase/app";
import M from "materialize-css/dist/js/materialize.min.js";

const PdfInput = () => {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    salary: "",
    address: "",
    department: "",
    year: "",
    age: "",
    gender: "",
  });

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const { fName, lName, email, phone, salary, address, department, year, age, gender } = user;

  const onSubmit = (e) => {
    e.preventDefault();
    if (fName === "" || lName === "" || email === "" || phone === "" || salary === "") {
      M.toast({ html: "Please fill all fields" });
    } else {
      db.collection("users")
        .add({
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          fName: fName,
          lName: lName,
          email: email,
          phone: phone,
          salary: salary,
          address: address,
          department: department,
          year: year,
          age: age,
          gender: gender,
        })
        .then(() => console.log("Data Successfully added"))
        .catch((err) => console.log(`Error occured ${err}`));

      M.toast({ html: `${fName} ${lName} was successfully added` });

      setUser({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        salary: "",
        address: "",
        department: "",
        year: "",
        age: "",
        gender: "",
      });
    }
  };

  return (
    <div className="row">
      <h4>Add User</h4>
      <form className="col s12" onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input
              id="first_name"
              type="text"
              className="validate"
              name="fName"
              value={fName}
              onChange={onChange}
            />
            <label htmlFor="first_name">First Name</label>
          </div>

          <div className="input-field col s6">
            <input
              id="last_name"
              type="text"
              name="lName"
              className="validate"
              value={lName}
              onChange={onChange}
            />
            <label htmlFor="last_name">Last Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input
              id="email"
              type="email"
              className="validate"
              name="email"
              value={email}
              onChange={onChange}
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-field col s6">
            <input
              id="telephone"
              type="tel"
              className="validate"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
              value={phone}
              onChange={onChange}
            />
            <label htmlFor="telephone">Telephone: Ex.(222-333-444)</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <textarea
              id="address"
              className="materialize-textarea validate"
              data-length="120"
              name="address"
              value={address}
              onChange={onChange}
            />
            <label htmlFor="address">House Address</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input
              id="year"
              type="number"
              className="validate"
              name="year"
              min="1"
              max="10"
              value={year}
              onChange={onChange}
            />
            <label htmlFor="year">No Of Years Working(1-10years)</label>
          </div>

          <select
            className="browser-default input-field col s6"
            name="department"
            value={department}
            onChange={onChange}
          >
            <option value="" disabled>
              Department
            </option>
            <option value="Front-end Engineering">Front-end Engineering</option>
            <option value="Back-end Engineering">Back-end Engineering </option>
            <option value="Data Science">Data science</option>
            <option value="Dev Ops">Dev Ops</option>
            <option value="Testing">Testing</option>
            <option value="Hardware Engineering">Hardware Engineering</option>
          </select>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input
              id="age"
              type="number"
              className="validate"
              name="age"
              value={age}
              onChange={onChange}
            />
            <label htmlFor="age">Age</label>
          </div>

          <div className="input-field col s6">
            <input
              id="salary"
              type="number"
              className="validate"
              name="salary"
              value={salary}
              onChange={onChange}
            />
            <label htmlFor="salary">Monthly Salary</label>
          </div>
        </div>

        <div className="input-field col s12">
          <span>Gender: </span>
          <span style={{ paddingLeft: 20 }}>
            <label htmlFor="male">
              <input
                name="gender"
                type="radio"
                value="male"
                className="with-gap"
                id="male"
                onChange={onChange}
              />
              <span>Male</span>
            </label>
          </span>

          <span style={{ paddingLeft: 20 }}>
            <label htmlFor="female">
              <input
                name="gender"
                type="radio"
                value="female"
                className="with-gap"
                id="female"
                onChange={onChange}
              />
              <span>Female</span>
            </label>
          </span>
        </div>

        <button className="waves-effect waves-light btn blue" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PdfInput;
