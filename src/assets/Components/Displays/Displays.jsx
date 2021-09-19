import React, {useState} from "react";
import Green from "./Green/Green";
import Yellow from "./Yellow/Yellow";
import Red from "./Red/Red";
import Stopatch from "./Stopwatch/Stopatch";
import {storeConfigs} from "../../configs/store-configs";

import style from './Display.module.css';

const Displays = (props) => {
    const data = props.dispatch({type: storeConfigs.getColor});

    const [stopwatch, setStopwatch] = useState(data[1]);

    function setSec() {
        if (stopwatch > 1) {
            //
            setStopwatch(stopwatch - 1);
        }else {
            //update color in base
            props.dispatch({type: storeConfigs.update});
        }
    }

    setTimeout(setSec, 1000);

    return (
        <div className={style.body}>
            <Red data={data[0]} />
            <Yellow data={data[0]} />
            <Green data={data[0]} />
            <Stopatch value={stopwatch} />
        </div>
    )
};

export default Displays;