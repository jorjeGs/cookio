import React from "react";
import Loader from "../assets/loader.svg?react";

const LoadingButton = ({ text, onClick, loading, disabled, style }) => {

    const styling = 'submit-btn ' + style;
    return (
        <button className={styling} onClick={onClick} disabled={disabled}>
            {loading ? <Loader className="spinner" /> : text}
        </button>
    );
}

export default LoadingButton;