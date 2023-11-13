import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonRouterLink,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import React from "react";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Too Hot To Handle</h1>

        <IonRouterLink href="/tab2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sweden_flag_orb_icon.svg/1200px-Sweden_flag_orb_icon.svg.png"
            alt="Image 1"
            className="weather-image"
          />
        </IonRouterLink>
        <IonRouterLink href="/tab3">
          <img src="israel.png" alt="Image 2" className="weather-image" />
        </IonRouterLink>
        <IonRouterLink href="/tab4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/197/197374.png"
            alt="Image 3"
            className="weather-image"
          />
        </IonRouterLink>
        <IonRouterLink href="/tab5">
          <img src="italy.png" alt="Image 4" className="weather-image" />
        </IonRouterLink>
        <IonRouterLink href="/tab6">
          <img src="netherlands.png" alt="Image 5" className="weather-image" />
        </IonRouterLink>
        <IonRouterLink href="/tab7">
          <img src="petach tikva.png" alt="Image 5" className="weather-image" />
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
