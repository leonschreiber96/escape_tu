import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";
import places from "../places.json";
import Place from "../model/place";

export default function GoToPlaceConfirmIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   responseBuilder.addContext(gameSession.target?.replaceAll(" ", "_") || "", 99, gameSession.dialogFlowSessionId)
   responseBuilder.addContext(gameSession.currentLocation.replaceAll(" ", "_"), 0, gameSession.dialogFlowSessionId)

   if (!gameSession.target) {
      responseBuilder.addMessage("Sorry, where did you want to go again? The stress of a zombie apocalypse makes you a bit forgetful");
      responseBuilder.addContext("go_to_place-followup", 0, gameSession.dialogFlowSessionId)
      responseBuilder.addContext("asked_for_target", 99, gameSession.dialogFlowSessionId)
   }

   gameSession.currentLocation = gameSession.target!;

   if (!gameSession.visitedPlaces[gameSession.currentLocation]) {
      gameSession.visitedPlaces[gameSession.currentLocation] = true;
      let buildingText = `intro ${gameSession.currentLocation}`;

      if (gameSession.currentLocation === Place.StudentCafe) {
         buildingText += ` ${gameSession.hasCheatSheet ? "unlocked" : "locked"}`
         if (gameSession.hasCheatSheet) responseBuilder.addContext("Cheat_Sheet_Decision", 99, gameSession.dialogFlowSessionId);
      }

      responseBuilder.addMessage(getText(buildingText));
   } else {
      let buildingText = `return ${gameSession.currentLocation}`

      if (gameSession.currentLocation === Place.StudentCafe) {
         buildingText += ` ${gameSession.hasCheatSheet ? "unlocked" : "locked"}`
         if (gameSession.hasCheatSheet) responseBuilder.addContext("Cheat_Sheet_Decision", 99, gameSession.dialogFlowSessionId);
      }

      responseBuilder.addMessage(getText(buildingText))
   }

   if (gameSession.currentLocation === Place.StudentCafe && gameSession.hasCheatSheet) {
      gameSession.helpText = "You noticed the zombies are going crazy about your cheat sheet. Your options are throwing it at them or tearing it apart."
   } else {
      gameSession.helpText = `You are at the ${gameSession.currentLocation}. Your possible actions are 
      ${places.find(x => x.name === gameSession.currentLocation)!
         .actions!
         .map((x, index) => `${index + 1}: ${x}`).join(". ")}`
      
      responseBuilder.addContext("asked_for_target", 99, gameSession.dialogFlowSessionId)
   }

   responseBuilder.addContext("go_to_place-followup", 0, gameSession.dialogFlowSessionId)
   return responseBuilder.build();
}