import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";

export default function StartGameIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   if (!gameSession.gameStarted) {
      gameSession.gameStarted = true
      responseBuilder.addMessage(getText("intro Cafeteria"));
      responseBuilder.addContext("asked_to_start", 0);
      responseBuilder.addContext("asked_for_target", 99);

      gameSession.helpText = "You're in the cafeteria. You wanted to get your laptop from the library, remember? Now you have to decide where to go: main building, library or student café?"
   } else {
      responseBuilder.addMessage("The game has already started.")
   }

   return responseBuilder.build();
}