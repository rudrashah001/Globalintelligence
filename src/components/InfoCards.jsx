function InfoCards({ data, countryData }) {

  if (!data) return null;

  const temp = data.weather?.temperature;
  const wind = data.weather?.windspeed;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

      {/* Address Card */}
      <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl p-6 border border-white border-opacity-20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl group-hover:scale-125 transition-transform duration-300">📍</span>
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
            Address
          </h2>
        </div>
        <p className="text-blue-50 text-sm leading-relaxed break-words">
          {data.address || "N/A"}
        </p>
      </div>

      {/* Weather Card */}
      <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl p-6 border border-white border-opacity-20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl group-hover:scale-125 transition-transform duration-300">☀️</span>
          <h2 className="text-xl font-bold bg-gradient-to-r from-orange-300 to-yellow-100 bg-clip-text text-transparent">
            Weather
          </h2>
        </div>

        <p className={`text-xl font-semibold ${
          temp > 30
            ? "text-red-300"
            : temp > 15
            ? "text-orange-300"
            : "text-blue-300"
        }`}>
          🌡️ {temp ?? "N/A"}°C
        </p>

        <p className="text-blue-100 mt-2 text-sm">
          💨 Wind: {wind ?? "N/A"} km/h
        </p>
      </div>

      {/* Elevation Card */}
      <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl p-6 border border-white border-opacity-20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl group-hover:scale-125 transition-transform duration-300">⛰️</span>
          <h2 className="text-xl font-bold bg-gradient-to-r from-green-300 to-emerald-100 bg-clip-text text-transparent">
            Elevation
          </h2>
        </div>

        <p className="text-2xl font-bold text-green-300">
          {data.elevation ?? "N/A"}
        </p>
        <p className="text-green-100 text-xs mt-1">
          meters above sea level
        </p>
      </div>

      {/* Country Card */}
      <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl p-6 border border-white border-opacity-20 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl group-hover:scale-125 transition-transform duration-300">🏛️</span>
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-300 to-pink-100 bg-clip-text text-transparent">
            Country
          </h2>
        </div>

        {countryData ? (
          <div className="space-y-2 text-sm">
            <p className="text-white font-medium">
              {countryData.name?.common || "N/A"}
            </p>
            <p className="text-blue-100">
              Capital: {countryData.capital?.[0] || "N/A"}
            </p>
            <p className="text-blue-100">
              Region: {countryData.region || "N/A"}
            </p>
          </div>
        ) : (
          <p className="text-yellow-300 text-sm font-semibold">ℹ️ Country data not available</p>
        )}
      </div>

    </div>
  );
}

export default InfoCards;

