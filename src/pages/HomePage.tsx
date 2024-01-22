import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  IonText,
  IonMenu,
  IonButtons,
  IonMenuButton,
  IonButton,
} from "@ionic/react";
import axios from "axios";
import "./HomePage.css";
import { search } from "ionicons/icons";

const HomePage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string | undefined>(
    undefined
  );
  const [weatherData, setWeatherData] = useState<any>(null);

  const history = useHistory();

  const handleCityChange = (event: CustomEvent) => {
    const selectedValue = event.detail.value;
    setSelectedCity(selectedValue);

    if (selectedValue === "search-city") {
      setWeatherData(null);
      history.push("/Search");
    }
  };

  useEffect(() => {
    if (selectedCity) {
      const apiKey = "your_api_key_here";
      const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${selectedCity}&aqi=no`;

      axios
        .get(apiUrl)
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [selectedCity]);

  const openWebsite = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color="tertiary">
            <IonTitle>More then weather</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {/* Add buttons to open websites */}
          <IonButton
            expand="full"
            onClick={() => openWebsite("https://www.un.org/en/climatechange")}
          >
            UN Climate Change Website
          </IonButton>
          <IonButton
            expand="full"
            onClick={() => openWebsite("https://wwf.panda.org/support_wwf/")}
          >
            Donate to WWF
          </IonButton>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Sharon's weather app</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            <IonItem>
              <IonSelect
                placeholder="Select a City"
                value={selectedCity}
                onIonChange={handleCityChange}
              >
                <IonSelectOption value="new-york">New York</IonSelectOption>
                <IonSelectOption value="tel-aviv">Tel Aviv</IonSelectOption>
                <IonSelectOption value="paris">Paris</IonSelectOption>
                <IonSelectOption value="search-city">
                  Search a City
                </IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>

          {selectedCity !== "search-city" && weatherData && (
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
    </>
  );
};

export default HomePage;
