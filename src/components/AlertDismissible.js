import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

// const variants = [
//   "primary",
//   "secondary",
//   "success",
//   "danger",
//   "warning",
//   "info",
//   "light",
//   "dark",
// ];

function AlertDismissible({ variant, mensagem, titulo, showAlert }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(showAlert);
  }, [showAlert]);

  if (show) {
    return (
      <Alert
        fade={false}
        variant={variant}
        show={true}
        onClose={() => setShow(false)}
        dismissible
      >
        <Alert.Heading>{titulo}</Alert.Heading>
        <p>{mensagem}</p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Mostrar mensagem</Button>;
}

export default AlertDismissible;
