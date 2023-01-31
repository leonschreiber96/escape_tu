import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";

export default function EnterStudentCafeDeclineIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();
    
   responseBuilder.addMessage(getText("game_over_entry"))
   gameSession.helpText = "You just declined to enter the student cafe and the zombies got to you. You lost the game. You can restart the game."
   
   return responseBuilder.build();
}