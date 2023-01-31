import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";

export default function GoHomeIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();
    
   responseBuilder.addMessage(getText("farewell"))
   gameSession.helpText = "You went home. You won the game. You can restart the game."
   
   return responseBuilder.build();
}