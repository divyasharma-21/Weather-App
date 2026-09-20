# 🌤️ Weather App

A browser-based Weather App developed using **HTML, CSS, and JavaScript** that allows users to search for a city and view its current weather information. The application uses the **OpenWeatherMap API** to fetch real-time weather data including temperature, humidity, weather conditions, and corresponding weather icons.

## 🌐 Live Demo

🔗 https://divyasharma-21.github.io/Weather-App/

---

# 📌 Project Description

This project is a simple and interactive weather application designed to provide real-time weather information directly in the browser.

The user enters the name of a city and clicks the **Get Weather** button. The application sends a request to the OpenWeatherMap API and retrieves the current weather conditions for that location.

The application then displays:

* 🌍 City name
* 🌡️ Current temperature
* 💧 Humidity
* ☁️ Weather description
* 🌈 Weather emoji based on the weather condition

The application also provides a **Back** button that allows users to return to the search screen and search for another city without reloading the webpage.

---

# ✨ Features

## 1. City Search

Users can enter any city name in the search box.

Example:

```text
Bengaluru
```

After clicking **Get Weather**, the application fetches the current weather data for the entered city.

---

## 2. Real-Time Weather Data

The application uses the **OpenWeatherMap API** to retrieve current weather information.

The API provides data such as:

* City name
* Temperature
* Humidity
* Weather condition
* Weather condition ID

The temperature is displayed in **Celsius**.

---

## 3. Temperature Display

The current temperature of the searched city is displayed prominently.

Example:

```text
28 °C
```

The application uses the `metric` unit provided by the OpenWeatherMap API to display temperature in Celsius.

---

## 4. Humidity Information

The application displays the current humidity level of the selected city.

Example:

```text
Humidity : 72
```

This value is retrieved directly from the weather API response.

---

## 5. Weather Description

The application displays a description of the current weather condition.

Example:

```text
CLEAR SKY
```

The description is converted to uppercase to make it more visually prominent.

---

## 6. Weather Emoji

The application dynamically selects an emoji according to the weather condition ID returned by the API.

### Thunderstorm

```text
⛈️
```

### Drizzle

```text
🌧️
```

### Rain

```text
🌧️
```

### Snow

```text
❄️
```

### Mist / Fog

```text
🌫️
```

### Clear Sky

```text
☀️
```

### Clouds

```text
☁️
```

If the weather condition is not recognized, the application displays:

```text
❓
```

---

## 7. Back Button

After viewing the weather information, users can click the **← Back** button to return to the city search screen.

The button:

* Returns to the search screen.
* Clears the previous city name.
* Allows another city to be searched.
* Does not require the webpage to be reloaded.

---

## 8. Error Handling

The application handles situations where weather data cannot be retrieved.

If the API request fails, an error message is displayed instead of the weather information.

For example:

```text
Could not fetch weather data.
```

The application also checks whether the user has entered a city before making the API request.

---

# 🎨 User Interface

The application uses a gradient-based interface with glowing borders and rounded containers.

The design includes:

* Gradient backgrounds
* Neon-style glowing borders
* Rounded weather cards
* Interactive buttons
* Hover effects
* Weather emojis
* Centered responsive layout

The interface is designed to keep the application simple while giving it a visually appealing appearance.

---

# 💻 Technologies Used

* **HTML5** – Structure and layout
* **CSS3** – Styling, gradients, animations, and responsive design
* **JavaScript** – Application logic and API interaction
* **OpenWeatherMap API** – Real-time weather data

The project is built using **Vanilla JavaScript**, keeping it lightweight and dependency-free.

---

# 📂 Project Structure

```text
Weather-App/
│
├── index.html
├── style.css
├── script.js
├── bgweather.avif
└── README.md
```

---

# 🧠 How It Works

### Step 1

The user enters a city name.

### Step 2

The user clicks the **Get Weather** button.

### Step 3

JavaScript retrieves the entered city name.

### Step 4

A request is sent to the OpenWeatherMap API.

### Step 5

The API returns the current weather information.

### Step 6

JavaScript extracts:

* City name
* Temperature
* Humidity
* Description
* Weather ID

### Step 7

The information is displayed on the weather screen.

### Step 8

A suitable weather emoji is selected based on the weather ID.

### Step 9

The user can click **← Back** to search for another city.

---

# 🔄 Application Flow

```text
Enter City
     ↓
Get Weather
     ↓
API Request
     ↓
OpenWeatherMap API
     ↓
Weather Data
     ↓
Display Weather
     ↓
← Back
     ↓
Search Another City
```

---

# 📱 Responsive Design

The application uses CSS properties such as:

* Flexible layouts
* Viewport-based sizing
* Centered containers
* Responsive dimensions

This allows the weather application to work across different screen sizes, including desktop and mobile devices.

---

# 🌐 API Used

This project uses the **OpenWeatherMap Current Weather Data API** to retrieve weather information.

The application sends the city name along with the API key and requests the temperature in Celsius.

---

# 🚀 How to Run

### 1. Clone the repository

```bash
git clone https://github.com/divyasharma-21/Weather-App.git
```

### 2. Open the project folder

```bash
cd Weather-App
```

### 3. Open the application

Open `index.html` in your browser.

The application can also be accessed through the GitHub Pages live deployment.

---

# 📜 License

This project is licensed under the MIT License. Feel free to use, modify, and distribute this project with proper attribution.

---

# 👩‍💻 Author

**Divya Sharma**

GitHub: https://github.com/divyasharma-21

---

# ⭐ Support

If you liked this project:

* ⭐ Star the repository
* 🍴 Fork the project
* 🚀 Share it with others
