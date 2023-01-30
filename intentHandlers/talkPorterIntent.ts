import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";

export default function TalkPorterIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   responseBuilder.addMessage(getText("main_building_doorkeeper"))
   gameSession.helpText = "The porter just told you that you'll probably find the cheat sheets in the math building. Or maybe in the cafeteria...?"

   return responseBuilder.build();
}