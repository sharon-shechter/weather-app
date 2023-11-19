import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Tab1 from "./pages/HomePage";
import Tab2 from "./pages/Bern";
import Tab3 from "./pages/TelAviv";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import AddTab from "./pages/AddTab";
import HomePage from "./pages/HomePage";
import Bern from "./pages/Bern";
import TelAviv from "./pages/TelAviv";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/HomePage">
            <HomePage />
          </Route>
          <Route exact path="/Bern">
            <Bern />
          </Route>
          <Route exact path="/TelAviv">
            <TelAviv />
          </Route>
          <Route exact path="/AddTab">
            <AddTab />
          </Route>
          <Route exact path="/">
            <Redirect to="/HomePage" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom"></IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
