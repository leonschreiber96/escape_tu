import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";

export default function SeekLaptopIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();
    
   responseBuilder.addMessage(getText("laptop_found"))
   gameSession.helpText = "You found your laptop. Now you can finally go home or explore more."
   
   return responseBuilder.build();
}