// AddTab.tsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonToggle,
  IonLabel,
} from "@ionic/react";
import "./Wether.css";

const AddTab: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [cityChoice, setCityChoice] = useState<string>("");
  const [saveLocation, setSaveLocation] = useState<boolean>(false);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual API key
    const apiKey = "5ad3dc179a0f4a6c89c111130231311";
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=5ad3dc179a0f4a6c89c111130231311&q=${cityChoice}&aqi=no`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [cityChoice]); // Include cityChoice in the dependency array to re-run the effect when it changes

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
            <IonTitle size="large">AddTab</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonInput
          placeholder="Enter city name"
          value={cityChoice}
          onIonChange={(e) => setCityChoice(e.detail.value!)}
        />
        <IonButton onClick={() => console.log(cityChoice)}>
          Save City Choice
        </IonButton>
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

export default AddTab;
