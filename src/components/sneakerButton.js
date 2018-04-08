import React from "react";

const SneakerButton = ({ title, onClick }) => {
  const styles = {
    backgroundColor: "#007dff",
    color: "white",
    padding: "4px 10px",
    fontSize: "14px",
    border: "none",
    borderRadius: "4px"
  };
  return (
    <button className="SneakerBtn" onClick={onClick} style={styles}>
      {title}
    </button>
  );
};

export { SneakerButton };