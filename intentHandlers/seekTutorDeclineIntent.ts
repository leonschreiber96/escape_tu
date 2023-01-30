import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";

export default function SeekTutorDeclineIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   responseBuilder.addMessage(getText("game_over_tutor"))
   gameSession.helpText = "Not searching for the tutor was a bad idea - game over! Do you want to restart?"

   return responseBuilder.build();
}