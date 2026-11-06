# Smart Irrigation App

Small Express.js API for exposing the current state of a smart irrigation system. The application currently provides read-only status endpoints for sensors, the battery, and the irrigation system, plus controls for starting and stopping the water pump.

## Features

- Sensor status reporting
- Battery level and charging status reporting
- Irrigation system health/status endpoint
- Water pump status endpoint
- Water pump start and stop endpoints

## Requirements

- Node.js
- npm

## Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/anisblf02/SmartIrrigationApp.git
cd SmartIrrigationApp
npm install
```

## Running the API

Start the server with:

```bash
node app.js
```

The API listens on port `3000`:

```text
http://localhost:3000
```

There is currently no `start` script in `package.json`, so the application is started directly with Node.js.

## API endpoints

All responses are JSON.

### Sensor status

```http
GET /sensors
```

Returns soil moisture, temperature, humidity, and an overall status.

Example response:

```json
{
  "soilMoisture": "40%",
  "temperature": "27°C",
  "humidity": "60%",
  "status": "Optimal"
}
```

### Battery status

```http
GET /battery
```

Returns the current battery level and whether the battery is charging.

Example response:

```json
{
  "level": "80%",
  "charging": true
}
```

### Irrigation status

```http
GET /irrigation
```

Returns a basic irrigation-system status message.

Example response:

```json
{
  "message": "Irrigation system running"
}
```

### Water pump status

```http
GET /pump
```

Returns the current pump identifier, state, flow rate, last activation time, and operating mode.

### Start the water pump

```http
POST /pump/start
```

Returns a confirmation that the pump was started.

### Stop the water pump

```http
POST /pump/stop
```

Returns a confirmation that the pump was stopped.

## Project structure

```text
.
├── app.js
├── package.json
├── routes
│   ├── battery.js
│   ├── irrigation.js
│   ├── pump.js
│   ├── sensor.js
│   └── sensor2.js
└── services
    └── batteryService.js
```

- `app.js` creates the Express application, enables JSON parsing, mounts the route modules, and starts the server.
- `routes/` contains the HTTP route handlers.
- `services/batteryService.js` supplies battery status data to the battery route.
- `routes/sensor2.js` contains an alternate sensor response, but it is not currently mounted by `app.js`.

## Development notes

The current implementation returns in-memory, hard-coded sample values. It does not yet connect to physical sensors, persist state, or authenticate requests. Pump start and stop routes return status messages but do not control physical hardware.

No automated test suite or lint configuration is currently defined in the repository.
