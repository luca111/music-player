import React from "react";
import "./Spinner.scss";

// spinner by Dom (adapted) - https://codepen.io/ahdigital/pen/prXBzN
export default function Spinner() {
  return (
    <div className="Spinner">
      <div className="preloader-2">
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
        <span className="line line-4"></span>
        <span className="line line-5"></span>
        <span className="line line-6"></span>
        <span className="line line-7"></span>
        <span className="line line-8"></span>
        <span className="line line-9"></span>
        <span className="line line-10"></span>
        <span className="line line-11"></span>
        <span className="line line-12"></span>
        <span className="line line-13"></span>
        <span className="line line-14"></span>
        <span className="line line-15"></span>
        <span className="line line-16"></span>
        <span className="line line-17"></span>
        <div>Loading...</div>
      </div>
    </div>
  );
}
