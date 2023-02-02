import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";
import Place from "model/place";

export default function EnterAudimaxIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   responseBuilder.addMessage(getText("main_building_audimax"));
   gameSession.helpText = "You just listened to a lexture in the lecture hall. Wanna do it again?"
   responseBuilder.addContext("asked_for_target", 0, gameSession.dialogFlowSessionId) // So that you can't just leave the Audimax with the "go_to_place" intent

   return responseBuilder.build();
}