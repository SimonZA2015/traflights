import React from "react";

import style from './Green.module.css';

const Green = (props) => {

    if (props.data === 0) {
        return (<div className={style.body} />)
    }else {
        return <div className={style.body + ' ' + style.Off} />
    }
};

export default Green;