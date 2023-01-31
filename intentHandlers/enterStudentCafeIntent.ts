import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";

export default function EnterStudentCafeIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();
    
   responseBuilder.addMessage(getText("library_with_key"))
   gameSession.helpText = "You enter the library. You have books which need returning. You can return the books or look for your laptop"
   
   return responseBuilder.build();
}