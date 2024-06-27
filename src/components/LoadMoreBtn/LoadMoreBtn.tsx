import React from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  children: React.ReactNode;
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ children, onClick }) => {
  return (
    <button className={css.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default LoadMoreBtn;
