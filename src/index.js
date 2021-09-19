import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./assets/store/store";

function render() {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

store.observer(render);
