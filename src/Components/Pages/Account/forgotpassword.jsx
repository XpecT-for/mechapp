import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../../../../src/contexts/AuthContext";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("check your inbox");
    } catch {
      setError("Failed to Sign in");
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          {message && <Alert variant="primary">{message}</Alert>}
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

            <Button
              disabled={loading}
              variant="primary w-100 mt-2"
              type="submit"
            >
              Reset Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't have an account ? <Link to="/signin">Sign In</Link>
      </div>
    </>
  );
}
