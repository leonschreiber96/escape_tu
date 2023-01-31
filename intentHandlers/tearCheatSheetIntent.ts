import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";

export default function TearCheatSheetIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();
    
   responseBuilder.addMessage(getText("game_over_tear"))
   gameSession.helpText = "You just tore the cheat sheet. You can't use it anymore. You lost the game. You can restart the game."
   

   return responseBuilder.build();
}