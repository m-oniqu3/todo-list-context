import React from "react";
import styled from "./Header.module.css";

const Header = () => {
  const today = new Date().toDateString();
  return (
    <header className={styled.header}>
      <p className={styled.date}>{today}</p>
    </header>
  );
};

export default Header;
