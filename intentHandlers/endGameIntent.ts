import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";
import places from "../places.json";
import Place from "../model/place";

export default function endGameIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   const currentLocation = places.find(x => x.name === gameSession.currentLocation)

   responseBuilder.addMessage("Ending the game");
   //com
   

   return responseBuilder.build();
}