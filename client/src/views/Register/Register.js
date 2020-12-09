// borrowed template from: https://serverless-stack.com/chapters/create-a-login-page.html

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
//  action="http://localhost:5000/auth/register"

  function handleSubmit(event) {
    event.preventDefault();

    try {
      const res = fetch("http://localhost:5000/auth/register", {
        method: "POST",
        body: JSON.stringify({
          username: event.value.username,
          password: event.value.password,
        }),
      });
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="Register">
      <h1 className="text-center">Register</h1>
        <form method="POST" action="http://localhost:5000/auth/register">
          <label>Enter username (email):</label>
          <input type="text" name="username"/>
          <label>Enter password:</label>
          <input type="password" name="password"/>
          <input type="submit" value="Login"></input>
        </form>

      {/* <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Register
        </Button>
      </Form> */}
    </div>
  );
}