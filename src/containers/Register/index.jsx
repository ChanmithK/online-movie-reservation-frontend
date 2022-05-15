import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../actions/user.actions";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [re_hash_password, setRePassword] = useState("");

  const dispatch = useDispatch();

  const userRegister = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
      re_hash_password,
    };
    dispatch(register(user));
  };

  return (
    <div>
      <form onSubmit={userRegister}>
        <label for="fname">First name:</label>
        <input
          type="text"
          placeholder="Enter first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label for="lname">Last name:</label>
        <input
          type="text"
          placeholder="Enter last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <label for="fname">Email:</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label for="lname">Phone:</label>
        <input
          type="text"
          placeholder="Enter Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <label for="fname">Password:</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label for="lname">Re-Enter Password:</label>
        <input
          type="password"
          placeholder="Enter Re-Password"
          value={re_hash_password}
          onChange={(e) => setRePassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Register;
