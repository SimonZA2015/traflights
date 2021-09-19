import React from "react";

import style from './yellow.module.css'

const Yellow = (props) => {

    if (props.data === 1 || props.data === 3) {
        return (<div className={style.body} />)
    }else {
        return (<div className={style.body + ' ' + style.Off} />)
    }
};

export default Yellow;