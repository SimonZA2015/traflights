import React from "react";

import style from './Red.module.css';

const Red = (props) => {

    if (props.data === 2) {
        return (
            <div className={style.body} />
        )
    }else {
        return <div className={style.body + ' '  + style.Off} />
    }
};

export default Red;