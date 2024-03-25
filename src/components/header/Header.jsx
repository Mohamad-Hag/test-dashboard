import React from "react";
import Logo from "./Logo";
import HeaderRight from "./HeaderRight";

export default function Header() {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <HeaderRight />
    </header>
  );
}
