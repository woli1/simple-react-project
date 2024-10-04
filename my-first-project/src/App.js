//import logo from "./logo.svg";
import "./App.css";
import Accordian from "./components/accordian";
import TabTest from "./components/custom tabs/tabs-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll indicator";
import QRcodeGenerator from "./components/sr-codoe-generator";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import GithubProfileFinder from "./github-profile-finder";
//import useWindowResizeTest from './components/use-window-click';
import UseWindowResizeTest from "./components/use-window-resize/test";
function App() {
  return <div className="App">
    
    {/*<Accordian/>
    <RandomColor/>
    <StarRating/>*/}
    {/*<ImageSlider url ='https://picsum.photos/v2/list' page={'1'} limit={'10'} >*/}
    {/*<LoadMoreData/> */}
    {/* <TreeView menus={menus}/>*/}
   {/* <QRcodeGenerator/>*/}
   {/*<LightDarkMode/> */}
   {/*<ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
    {/*<TabTest/> */}
    {/*<ModalTest/> */}
    {/*<GithubProfileFinder/> */}
    {/*<TicTacToe/> */}
    {/*<FeatureFlagGlobalState>
      <FeatureFlags/>
    </FeatureFlagGlobalState> */}
    {/*<UseOnclickOutsideTest/> */}
    <UseWindowResizeTest/>
  </div>
}

export default App;
