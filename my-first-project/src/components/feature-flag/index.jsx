import { useContext } from "react";
import Accordian from "../accordian";
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";


export default function FeatureFlags(){
    const { loading, enabledFlags } = useContext(FeatureFlagsContext);


    const componentsToRender=[
        {
            key:"showLightAndDarkMode",
            conponent:<LightDarkMode/>,
        },
        {
            key:"showTicTacToeBoard",
            conponent:<TicTacToe/>,
        },
        {
            key:"showRandomColorGenerator",
            conponent:<RandomColor/>,
        },
        {
            key:"showAccordian",
            conponent:<Accordian/>,
        },
        {
            key:"showTreeView",
            conponent:<TreeView menus={menus}/>,
        },
        
    ];
    function  checkEnabledFlags(getCurrentKey){
        return enabledFlags[getCurrentKey];
    }
    if(loading)return <h1>Loading data!Please wait</h1>;
    return (
            <div>
                <h1>Feature Flags</h1>
                {componentsToRender.map((item)=>
                checkEnabledFlags(item.key)?item.conponent:null)}
            </div>
    );
}