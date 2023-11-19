import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonRouterLink,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./HomePage.css";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        {" "}
        <h1>Too Hot To Handle</h1>{" "}
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Too Hot To Handle</h1>

        <IonRouterLink href="/Bern">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sweden_flag_orb_icon.svg/1200px-Sweden_flag_orb_icon.svg.png"
            alt="Image 1"
            className="weather-image"
          />
        </IonRouterLink>
        <IonRouterLink href="/TelAviv">
          <img
            src="icions\israel.png"
            alt="Image 2"
            className="weather-image"
          />
        </IonRouterLink>
        <IonRouterLink href="/tab4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/197/197374.png"
            alt="Image 3"
            className="weather-image"
          />
        </IonRouterLink>
        <IonRouterLink href="/tab5">
          <img src="icions\italy.png" alt="Image 4" className="weather-image" />
        </IonRouterLink>
        <IonRouterLink href="/tab6">
          <img
            src="icions\netherlands.png"
            alt="Image 5"
            className="weather-image"
          />
        </IonRouterLink>
        <IonRouterLink href="/AddTab">
          <img src="icions\loupe.png" alt="Image 5" className="weather-image" />
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
