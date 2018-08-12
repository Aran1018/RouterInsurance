
// import {AppRegistry} from 'react-native';
import Test from "./App/Test";
import * as AppRegistry from "react-native/Libraries/ReactNative/AppRegistry";
import MyPolicy from "./App/pages/MyPolicy";
import NavigatorManager from "./App/navigator/NavigatorManager";

AppRegistry.registerComponent("RouterInsurance",()=>NavigatorManager);
//111