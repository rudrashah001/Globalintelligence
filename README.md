# 🌍 Geographic Insight Hub

A modern web application to explore real-time weather, elevation, and country data using open-source geographic APIs. Fully responsive and optimized for both mobile and desktop devices.

## ✨ Features

- **Real-time Weather Data** - Current temperature and wind speed
- **Elevation Information** - Height above sea level
- **Country Details** - Capital, region, and country information
- **Interactive Map** - OpenStreetMap integration with location markers
- **Responsive Design** - Seamlessly works on mobile, tablet, and desktop
- **Modern UI** - Glassmorphism design with Tailwind CSS
- **Error Handling** - Graceful error messages for failed API calls

## 📱 Responsive Design (Mobile-First Approach)

The application is built using **Tailwind CSS** with mobile-first responsive breakpoints:

### Breakpoints Used:
- **Mobile**: Base styles (< 640px)
- **sm: (640px)** - Small devices, landscape phones
- **md: (768px)** - Tablets
- **lg: (1024px)** - Laptops and desktops
- **xl: (1280px)** - Large screens

### Responsive Components:

1. **SearchBar Component**
   - Mobile: Single column layout
   - sm/md: Two columns (Latitude, Longitude)
   - lg: Three columns (Latitude, Longitude, Button)
   - Button: Full width on mobile, auto on desktop

2. **InfoCards Component**
   - Mobile: 1 card per row (grid-cols-1)
   - sm: 2 cards per row (sm:grid-cols-2)
   - lg: 4 cards per row (lg:grid-cols-4)
   - Cards have hover effects and scale transitions

3. **MapView Component**
   - Mobile: h-96 (384px height)
   - Desktop: sm:h-[500px] (500px height)
   - Always scales to 100% width

4. **Header/Hero Section**
   - Responsive text sizing: text-5xl → sm:text-6xl
   - Padding adjusts: pt-24 pb-12 with responsive px-4
   - Emoji bouncing animation on all devices

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🛠️ Tech Stack

- **React 19** - UI Framework
- **Vite** - Build tool
- **Tailwind CSS** - Responsive styling
- **Axios** - API requests
- **Nominatim** - Reverse geocoding
- **Open-Meteo API** - Weather data
- **REST Countries API** - Country information
- **OpenStreetMap** - Map tiles and embedding

## 📊 API Endpoints

- Nominatim OpenStreetMap: Reverse geocoding
- Open-Meteo: Weather & elevation data
- REST Countries: Country details

## ✅ Testing Checklist

- [x] Mobile responsiveness (320px to 480px width)
- [x] Tablet responsiveness (768px to 1024px width)
- [x] Desktop responsiveness (1280px+ width)
- [x] Button disables while loading
- [x] Map updates with new coordinates
- [x] Error handling for missing country data
- [x] Touch-friendly button sizes
- [x] Proper spacing and padding on all devices

## 📝 Git Commit Best Practices

Use these commit message formats:
- `feat:` New features
- `fix:` Bug fixes
- `refactor:` Code restructuring
- `style:` Formatting changes
- `docs:` Documentation updates
- `test:` Test additions

Example: `git commit -m "feat: Add responsive map with mobile support"`

## 📄 License

This project is open source and available under the MIT License.
👨‍💻 Author

Rudra Shah
Frontend Developer – React