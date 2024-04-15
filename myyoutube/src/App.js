import Body from "./components/Body";
import Header from "./components/Header";
import "./index.css"
import {Provider} from "react-redux";
import store from "./utils/store";

function App() {
  return (
     
  //  -Header
  //  -Body
  //  ---sidebar
  //  -----menuItems
  //  ---videoContainer
  //  -----ButtonList
  //  -----video Card

  <Provider store={store}>

  <div>
     <Header />
     <Body />
  </div>

  </Provider>

  );
}

export default App;
