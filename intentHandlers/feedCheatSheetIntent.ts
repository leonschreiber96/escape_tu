import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";

export default function FeedCheatSheetIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();
    
   responseBuilder.addMessage(getText("student_cafe_enter"))
   gameSession.helpText = "The zombies fled in fear. You can now enter the student cafe."
   
   return responseBuilder.build();
}