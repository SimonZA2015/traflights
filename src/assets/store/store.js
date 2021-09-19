import {storeConfigs} from "../configs/store-configs";
import {colorsStop, colorUrl} from "../configs/configs";

let store = {
    render: () => {
    },

    data: {
        idColor: false,
    },

    dispatch(action) {
        switch (action.type) {
            case storeConfigs.getColor:
                //return idColor and sec
                return [this.data.idColor, colorsStop[this.data.idColor] / 1000]

            case storeConfigs.update:
                debugger
                this.data.idColor += 1
                if (this.data.idColor > 2) {
                    this.data.idColor = 0
                }
                localStorage.setItem('colorId', this.data.idColor);
                let u = colorUrl[this.data.idColor];
                window.location.href = u
                break;

            default:
                break;
        }
    },

    observer(subscriber) {
        //store.js can update display
        this.render = subscriber;

        if (window.location.href.indexOf(colorUrl[0]) > -1) {
            store.data.idColor = 0
        } else if (window.location.href.indexOf(colorUrl[1]) > -1) {
            store.data.idColor = 1
        } else if (window.location.href.indexOf(colorUrl[2]) > -1) {
            store.data.idColor = 2
        } else if (window.location.href.indexOf(colorUrl[3]) > -1) {
            store.data.idColor = 3
        } else {
            debugger
            //check save
            let save = parseInt(localStorage.getItem('colorId'))
            if (save) {
                if (save > 3) {
                    window.location.href = colorUrl[1];

                } else {
                    //load save color
                    window.location.href = colorUrl[save];
                }

            } else {
                //load new save
                window.location.href = colorUrl[0];
            }
        }

        this.render();
    }

}

export default store;