import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";

export default function GoToPlaceAbortIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   gameSession.movingBetweenPlaces = false;
   gameSession.target = undefined;

   responseBuilder.addMessage(gameSession.helpText);

   return responseBuilder.build();
}