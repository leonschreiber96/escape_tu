import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";

export default function TalkLunchLadyIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   responseBuilder.addMessage(getText("lunch_lady"))
   gameSession.helpText = "The lunch lady just told you where you can find a tutor. Do you want to search for them?"

   return responseBuilder.build();
}