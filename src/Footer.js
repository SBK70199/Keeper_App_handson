import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <p>
      <footer>copirite {year}</footer>
    </p>
  );
}

export default Footer;
