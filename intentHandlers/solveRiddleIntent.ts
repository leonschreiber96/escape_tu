import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";

export default function SolveRiddleIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   if (query.parameters.number === 3) {
      responseBuilder.addMessage(getText("tutor_right_ans"));
      gameSession.hasCheatSheet = true;
      responseBuilder.addContext("asked_for_target", 99, gameSession.dialogFlowSessionId);
      responseBuilder.addContext("Search_Tutor", 0, gameSession.dialogFlowSessionId);
   }
   else responseBuilder.addMessage(getText("tutor_wrong_ans"))

   return responseBuilder.build();
}