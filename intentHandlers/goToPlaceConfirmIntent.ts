import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";
import places from "../places.json";
import Place from "../model/place";

export default function goToPlaceConfirmIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   gameSession.currentLocation = gameSession.target!;
   gameSession.visitedPlaces[gameSession.currentLocation] = true;

   return responseBuilder.build();
}