import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";

export default function SeekTutorIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   responseBuilder.addMessage(getText("tutor_riddle"))
   gameSession.helpText = "The tutor gave you this riddle to solve: If there are 4 apples and you take away 3, how many do you have?"

   return responseBuilder.build();
}