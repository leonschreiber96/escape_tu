import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";

export default function StartGameIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   if (!gameSession.gameStarted) {
      gameSession.gameStarted = true
      responseBuilder.addMessage(getText("mensa_first_time"));
   } else {
      throw new Error("Game already started");
   }

   return responseBuilder.build();
}