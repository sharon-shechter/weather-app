// Tab2.tsx

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Tab2.css";
import { IonButton } from "@ionic/react";

const Tab2: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = "5ad3dc179a0f4a6c89c111130231311";
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=5ad3dc179a0f4a6c89c111130231311&q=bern&aqi=no`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Too Hot To Handle</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Bern" />
        {weatherData && (
          <div>
            <h2>Weather Information for {weatherData.location.name}</h2>
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            <p>Condition: {weatherData.current.condition.text}</p>
            <p>Wind Speed: {weatherData.current.wind_kph} km/h</p>
            {weatherData.current.condition.icon && (
              <img
                src={`https:${weatherData.current.condition.icon}`}
                alt="Weather Icon"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            )}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
