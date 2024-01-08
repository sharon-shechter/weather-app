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
  IonIcon,
  IonSearchbar,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import { arrowBackOutline } from "ionicons/icons"; // Import the left arrow icon
import "./Wether.css";
import HomePage from "./HomePage";

const AddTab: React.FC = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  const [cityChoice, setCityChoice] = useState<string>("");
  const history = useHistory();

  useEffect(() => {
    const apiKey = "5ad3dc179a0f4a6c89c111130231311";
    const lowercaseCity = cityChoice.toLowerCase();
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lowercaseCity}&aqi=no`;
    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [cityChoice]);

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Too Hot To Handle</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Replace IonInput with IonSearchbar */}
        <IonSearchbar
          placeholder="Enter city name"
          value={cityChoice}
          onIonChange={(e) => setCityChoice(e.detail.value!)}
        />

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

        <IonButton
          expand="full"
          fill="clear"
          color="primary"
          onClick={handleGoBack}
        >
          <IonIcon icon={arrowBackOutline} />
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AddTab;