# Coding Challenge

## Calculate your footprint

### Preface

You return from a far away business trip and you wonder how many emissions your flights for this trip have caused. In order to calculate this, we ask you to develop a carbon footprint calculator based on your flight data.

### Functional requirements

The calculator should look similar to what we offer [here][1]. The user should be able to fill in the following data:

1. **From / Departure:** IATA airport code (e.g. "BER", "MUC", "LHR", ...)
2. **To / Destination:** IATA airport code (e.g. "BER", "MUC", "LHR", ...)
3. **Type:** "One way" OR "Return trip"
4. **Number of travellers**

For simplicity, we assume that every flight causes 285g CO2 per passenger per kilometre (source: [European Environment Agency report][1]).

When given all input parameters, the calculator should show you the **total amount of CO2 in kilograms** produced by your travel.

## Setup

There is a [backend directory](./backend) which helps you to start the "South Pole Airport API". To limit the scope of this task, only a few airports are supported and we assume that you can fly between all of them.

Please design and code your React frontend app within the [frontend directory](./frontend). You can use "[Create React App](https://create-react-app.dev/)" or any other tooling you like to setup a React app with TypeScript.

## Your Task

Build a single-page application (SPA) using React and TypeScript which shows a form to enter flight data (see above). When the user submits the form, a request to our "South Pole Airport API" should be made to retrieve the coordinates of the supported airports so that you can calculate the distance between the airports.

Once you know the distance, you can multiply the kilometeres by 285g CO2 per passenger to retrieve the total CO2 emission. Please show that number in kilograms to the user.  

[1]: https://www.eea.europa.eu/media/infographics/co2-emissions-from-passenger-transport/image/image_view_fullscreen# flight-co2-emissions
