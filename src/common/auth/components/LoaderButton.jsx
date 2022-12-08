import React from "react";
import { Button } from "react-bootstrap";
// import Glyphicon from 'react-bootstrap/lib/Glyphicon'


export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {props.children}
    </Button>
  );
}