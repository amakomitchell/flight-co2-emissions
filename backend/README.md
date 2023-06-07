## South Pole Airport API

The South Pole Airport API is a demo API that returns coordinates of airports
using [IATA airport codes](https://en.wikipedia.org/wiki/IATA_airport_code). [These airports](./src/data/airports.ts)
are supported.

## API

```
http://localhost:3030/<IATA>
```  

## Example

Request: http://localhost:3030/BER

Response:

```json
{
  "coordinates": {
    "lat": 52.351389,
    "lng": 13.493889
  },
  "iata": "BER"
}
``` 

## How to start the server?

Just run `npm start` or `npm start 8080` if you want to run the server on port `8080`.