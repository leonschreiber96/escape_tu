import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";
import Place from "model/place";

export default function EnterAudimaxIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   responseBuilder.addMessage(getText("main_building_audimax"));
   gameSession.helpText = "You just listened to a lexture in the Audimax. Wanna do it again?"

   return responseBuilder.build();
}