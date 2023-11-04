import React from "react";
import Button from "./ui/Button";

function ResetButton({ text, onClick }) {
  return (
    <Button text={text} onClick={onClick} />
  );
}

export default ResetButton;
