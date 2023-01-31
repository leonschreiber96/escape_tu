import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";

export default function ExploreMoreIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();
    
   responseBuilder.addMessage(getText("game_over_home"))
   gameSession.helpText = "You tried to explore more and the zombies got to you. You lost the game. You can restart the game."
   
   return responseBuilder.build();
}