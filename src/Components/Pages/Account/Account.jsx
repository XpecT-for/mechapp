import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Account() {
  const { currentUser, signout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await signout();
      history.pushState("/signin");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <center>
      <br />
      <br />
      <div className="card-main">
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong>
            {currentUser.email}
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </div>
    </center>
  );
}
