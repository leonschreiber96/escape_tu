import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import Place from "../model/place";
import places from "../places.json"

export default function GoToPlaceAbortIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   gameSession.movingBetweenPlaces = false;
   gameSession.target = undefined;

   if (gameSession.currentLocation === Place.StudentCafe && gameSession.hasCheatSheet) {
      gameSession.helpText = "You noticed the zombies are going crazy about your cheat sheet. Your options are throwing it at them or tearing it apart."
   } else {
      gameSession.helpText = `You are at the ${gameSession.currentLocation}. Your possible actions are 
      ${places.find(x => x.name === gameSession.currentLocation)!
         .actions!
         .map((x, index) => `${index + 1}: ${x}`).join(". ")}`
      
      responseBuilder.addContext("asked_for_target", 99, gameSession.dialogFlowSessionId)
   }

   responseBuilder.addMessage(gameSession.helpText);

   return responseBuilder.build();
}