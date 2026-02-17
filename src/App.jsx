import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import InfoCards from "./components/InfoCards";
import MapView from "./components/MapView";
import "./App.css";

function App() {
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [data, setData] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [countryError, setCountryError] = useState("");

  const fetchData = async () => {
    if (!lat || !lon || isNaN(lat) || isNaN(lon)) {
      setError("Please enter valid latitude and longitude");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setCountryError("");

      const latNum = parseFloat(lat);
      const lonNum = parseFloat(lon);

      const reverseURL = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latNum}&lon=${lonNum}`;
      const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latNum}&longitude=${lonNum}&current_weather=true`;
      const elevationURL = `https://api.open-meteo.com/v1/elevation?latitude=${latNum}&longitude=${lonNum}`;

      const [reverseRes, weatherRes, elevationRes] = await Promise.all([
        axios.get(reverseURL, {
          headers: { "Accept-Language": "en" },
        }),
        axios.get(weatherURL),
        axios.get(elevationURL),
      ]);

      const result = {
        address:
          reverseRes.data.display_name || "No address found",
        countryCode:
          reverseRes.data.address?.country_code?.toUpperCase() || null,
        weather:
          weatherRes.data.current_weather || null,
        elevation:
          elevationRes.data.elevation?.[0] ?? "N/A",
      };

      setData(result);

      // Fetch country details if country code exists
      if (result.countryCode) {
        try {
          const countryRes = await axios.get(
            `https://restcountries.com/v3.1/alpha/${result.countryCode}`
          );
          setCountryData(countryRes.data[0]);
        } catch (err) {
          // Non-blocking notice when country details can't be fetched
          setCountryError("No country data found for this location");
          setCountryData(null);
        }
      } else {
        // Coordinates may be in international waters or undefined area
        setCountryError("No country found for these coordinates");
        setCountryData(null);
      }
    } catch (err) {
      setError("Invalid coordinates or API error");
      setData(null);
      setCountryData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <div className="text-center pt-12 sm:pt-20 md:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 md:px-8">
        <div className="text-5xl sm:text-6xl md:text-7xl animate-bounce mb-4 sm:mb-6">🌍</div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          Geographic
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-normal pb-2">
  Insight Hub
</span>

        </h1>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-blue-100 max-w-2xl mx-auto">
          Explore real-time weather, elevation & country data
          using open-source geographic APIs.
        </p>
      </div>

      {/* Search Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <SearchBar
          lat={lat}
          lon={lon}
          setLat={setLat}
          setLon={setLon}
          fetchData={fetchData}
          loading={loading}
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="max-w-4xl mx-auto mt-4 sm:mt-6 px-4 sm:px-6 md:px-8">
          <div className="bg-red-500 bg-opacity-20 backdrop-blur-md border border-red-400 text-red-100 p-3 sm:p-4 rounded-xl flex items-center gap-2 sm:gap-3 shadow-lg text-sm sm:text-base">
            <span className="text-xl sm:text-2xl flex-shrink-0">⚠️</span>
            <p className="font-semibold">{error}</p>
          </div>
        </div>
      )}

      {/* Country-not-found Notice (non-blocking) */}
      {countryError && (
        <div className="max-w-4xl mx-auto mt-4 sm:mt-6 px-4 sm:px-6 md:px-8">
          <div className="bg-yellow-500 bg-opacity-20 backdrop-blur-md border border-yellow-400 text-yellow-100 p-3 sm:p-4 rounded-xl flex items-center gap-2 sm:gap-3 shadow-lg text-sm sm:text-base">
            <span className="text-xl sm:text-2xl flex-shrink-0">ℹ️</span>
            <p className="font-semibold">{countryError}</p>
          </div>
        </div>
      )}

      {/* Results */}
      {data && (
        <div className="max-w-7xl mx-auto mt-8 sm:mt-12 px-4 sm:px-6 md:px-8 pb-16 sm:pb-20">
          <InfoCards data={data} countryData={countryData} />

          <div className="mt-8 sm:mt-12 bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white border-opacity-20 shadow-2xl">
            <MapView lat={lat} lon={lon} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
