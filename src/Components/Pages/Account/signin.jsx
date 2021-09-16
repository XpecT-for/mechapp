import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../../../../src/contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./cardstyles.css";

export default function Signin() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signin } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await signin(emailRef.current.value, passwordRef.current.value);
      history.push("/account");
    } catch {
      setError("Failed to Sign in");
    }

    setLoading(false);
  }

  return (
    <center>
      <br />
      <br />
      <div className="card-main">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  ref={emailRef}
                />
              </Form.Group>

              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </Form.Group>

              <Button
                disabled={loading}
                variant="primary w-100 mt-2"
                type="submit"
              >
                Sign In
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Don't have an account ? <Link to="/signup">Sign Up</Link>
        </div>
        <div className="w-100 text-center mt-2">
          <Link to="/forgotpassword">Forgot Password?</Link>
        </div>
      </div>
    </center>
  );
}
