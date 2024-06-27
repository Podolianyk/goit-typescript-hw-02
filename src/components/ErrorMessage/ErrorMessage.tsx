import React from "react";
import css from "./ErrorMessage.module.css";

const ErrorMessage: React.FC = (): React.ReactElement => {
  return <p className={css.error}>This is an error! Please try again later.</p>;
};

export default ErrorMessage;
