import Displays from "./assets/Components/Displays/Displays";

import style from './App.module.css';

const App = (props) =>  {
  return (
    <div className={style.bg}>
        <div className={style.body}>
            <Displays dispatch={props.dispatch} />
        </div>
    </div>
  );
}

export default App;
