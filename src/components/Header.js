import React from "react";

const HeaderStyles = {
  top: "0px",
  position: "absolute",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "baseline",
  padding: "1em",
  backgroundColor: "rgb(250, 250, 250)",
  boxShadow: "0px 6px 8px teal",
  color: "black"
};
function Header() {
  return (
    <div>
      <header style={HeaderStyles}>
        <h2 style={{ color: "gray", fontWeight: "bold", fontSize: "30px" }}>
          FORM
        </h2>
      </header>
    </div>
  );
}

export default Header;
