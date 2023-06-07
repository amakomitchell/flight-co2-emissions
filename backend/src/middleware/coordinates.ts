import {RequestHandler} from "express";
import {airports} from "../data/airports";

export const coordinates: RequestHandler = (req, res) => {
  const {iata} = req.params;

  if (!iata) {
    return res.status(422).json({
      error: 'Missing "iata" parameter.',
    });
  }

  const airport = airports.find((airport) => airport.iata === iata);

  if (!airport) {
    return res.status(404).json({
      error: `Airport "${iata}" cannot be found.`,
    });
  }

  return res.status(200).json(airport);
};
