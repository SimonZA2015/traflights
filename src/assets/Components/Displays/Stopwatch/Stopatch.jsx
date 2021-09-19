import React from "react";

import style from './Stopwatch.module.css';

const Stopatch = (props) => {

    return (
        <div className={style.body}>
            <h4>{props.value}</h4>
        </div>
    )
};

export default Stopatch;