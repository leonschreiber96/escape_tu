import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";

export default function ReturnBooksIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();
    
   responseBuilder.addMessage(getText("game_over_books"))
   gameSession.helpText = "You just returned the books and were exmatriculated, because you were way past the deadline. You lost the game. You can restart the game."
   
   return responseBuilder.build();
}