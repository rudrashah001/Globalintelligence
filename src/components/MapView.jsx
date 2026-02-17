function MapView({ lat, lon }) {
  const latNum = parseFloat(lat);
  const lonNum = parseFloat(lon);

  if (!lat || !lon || isNaN(latNum) || isNaN(lonNum)) return null;

  return (
    <div className="mb-8">
      <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden border border-white border-opacity-20">
        
        <div className="px-8 py-6 flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600">
          <span className="text-3xl">🗺️</span>
          <h2 className="text-3xl font-bold text-white">
            Location Map
          </h2>
        </div>

        <iframe
          key={`${latNum}-${lonNum}`}
          title="location-map"
          className="border-none block w-full h-96 sm:h-[500px]"
          style={{ borderRadius: '0 0 1.5rem 1.5rem' }}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=${lonNum - 0.02},${latNum - 0.02},${lonNum + 0.02},${latNum + 0.02}&layer=mapnik&marker=${latNum},${lonNum}`}
          allowFullScreen=""
        ></iframe>

      </div>
    </div>
  );
}

export default MapView;

