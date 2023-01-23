import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";

export default function GreetingIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   if (!gameSession.gameStarted) {
      responseBuilder.addMessage(getText("introduction"));
      responseBuilder.addContext("asked_to_start", 99);
      responseBuilder.addContext("asked_to_start_last_question", 1)

      gameSession.helpText = getText("introduction")
   } else {
      responseBuilder.addMessage(getText("greeting_after_start"));
   }
   
   return responseBuilder.build();
}