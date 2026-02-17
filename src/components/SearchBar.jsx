function SearchBar({ lat, lon,setLat,setLon, fetchData, loading }) {
    return (
        <div className="max-w-6xl mx-auto px-4 mb-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white border-opacity-20 hover:bg-opacity-20 transition-all">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-blue-100 mb-3 flex items-center gap-2">
                  <span className="text-lg">📍</span>
                  Latitude
                </label>
                <input
                  type="number"
                  placeholder="e.g., 23.1815"
                  value={lat}
                  onChange={(e) => setLat(e.target.value)}
                  className="w-full px-5 py-4 bg-white bg-opacity-90 border-2 border-blue-300 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-gray-900 placeholder-gray-500 font-semibold transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-blue-100 mb-3 flex items-center gap-2">
                  <span className="text-lg">🧭</span>
                  Longitude
                </label>
                <input
                  type="number"
                  placeholder="e.g., 72.8479"
                  value={lon}
                  onChange={(e) => setLon(e.target.value)}
                  className="w-full px-5 py-4 bg-white bg-opacity-90 border-2 border-blue-300 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-gray-900 placeholder-gray-500 font-semibold transition-all"
                />
              </div>

              <div className="flex items-end">
                <button
                  onClick={fetchData}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Searching...
                    </>
                  ) : (
                    <>
                      <span>✨</span>
                      Explore
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
    );
}
export default SearchBar;