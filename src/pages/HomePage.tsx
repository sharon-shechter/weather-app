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

    // Check if the user selected "Search a City"
    if (selectedValue === "search-city") {
      // Reset weatherData when searching for a new city
      setWeatherData(null);
      // Navigate to the desired tab
      history.push("/Search");
    }
  };

  useEffect(() => {
    // Fetch weather data when the selected city changes
    if (selectedCity) {
      const apiKey = "5ad3dc179a0f4a6c89c111130231311";
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

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Too Hot To Handle</IonTitle>
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
              <div slot="label">
                City <IonText color="danger">(Required)</IonText>
              </div>
              <IonSelectOption value="new-york">New York</IonSelectOption>
              <IonSelectOption value="tel-aviv">Tel Aviv</IonSelectOption>
              <IonSelectOption value="paris">Paris</IonSelectOption>
              <IonSelectOption value="search-city">
                Search a City
              </IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
        {/* Display weather data */}
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
  );
};

export default HomePage;
