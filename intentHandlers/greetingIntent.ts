import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";
import Place from "../model/place";

export default function GreetingIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   if (!gameSession.gameStarted) {
      responseBuilder.addMessage(getText("introduction"));
      responseBuilder.addContext("asked_to_start", 99, gameSession.dialogFlowSessionId);

      gameSession.helpText = getText("introduction")
   } else {
      responseBuilder.addMessage(gameSession.helpText);
   }
   
   return responseBuilder.build();
}