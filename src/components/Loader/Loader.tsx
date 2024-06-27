import React from "react";
import { Bars } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader: React.FC = (): React.ReactElement => {
  return (
    <div className={css.loader}>
      <Bars
        height="80"
        width="80"
        color="rgb(82, 82, 189)"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
