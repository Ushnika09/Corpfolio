import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <div className="flex flex-col  justify-center items-center gap-">
        <h1>&copy; {new Date().getFullYear()} Corpfolio. All rights reserved.</h1>
      </div>
    </footer>
  );
}

export default Footer;
