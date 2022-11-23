import { useState } from "react";
import Header from "../Header/Header";
import Callbox from "../Callbox/Callbox";
import ActionBox from "../ActionBox/ActionBox";
const Main = () => {
    return (   
    <div id="App">
        <Header />
        <Callbox />
        <ActionBox />
    </div>
    )
}

export default Main;