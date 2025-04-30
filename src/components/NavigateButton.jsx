import React from "react";
import { useNavigate } from "react-router-dom";

function NavigateButton({ to, children, className }) {
  const navigate = useNavigate();

  return (
    <button className={className} onClick={() => navigate(to)}>
      {children}
    </button>
  );
}

export default NavigateButton;
