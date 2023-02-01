import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import places from "../places.json";
import Place from "../model/place";

export default function GoToPlaceIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   const currentLocation = places.find(x => x.name === gameSession.currentLocation)

   const acceptMove = () => {
      console.log("Accepting move")
      responseBuilder.addMessage(`You sure you want to go to the ${query.parameters.building}?`)
      responseBuilder.addContext("asked_for_target", 0, gameSession.dialogFlowSessionId);
      gameSession.movingBetweenPlaces = true;
      gameSession.target = query.parameters.building as Place;
      gameSession.helpText = `You wanted to go to the ${gameSession.target} and I asked you if you are really sure. Question still stands...`
   }

   if (currentLocation?.name === query.parameters.building) {
      responseBuilder.addMessage("You are already here");
      responseBuilder.addContext("go_to_place-followup", 0, gameSession.dialogFlowSessionId) // Deactivate the follow-up confirmation
   } else if (query.outputContexts.find(x => x.name.endsWith("porter_talk"))) {
      if (!gameSession.hasCheatSheet && (query.parameters.building === Place.MathBuilding || query.parameters.building === Place.Cafeteria)) {
         acceptMove();
         responseBuilder.addContext("Porter_Talk", 0, gameSession.dialogFlowSessionId);
      } else if (gameSession.hasCheatSheet && (query.parameters.building === Place.StudentCafe || query.parameters.building === Place.Cafeteria)) {
         acceptMove();
         responseBuilder.addContext("Porter_Talk", 0, gameSession.dialogFlowSessionId);
      } else {
         responseBuilder.addMessage("No, not there...")
         responseBuilder.addContext("go_to_place-followup", 0, gameSession.dialogFlowSessionId) // Deactivate the follow-up confirmation
      }
   } else if (!currentLocation?.targets.some(x => x.name === query.parameters.building)) {
      responseBuilder.addMessage("You can't go there from here. Try again later!")
      responseBuilder.addContext("go_to_place-followup", 0, gameSession.dialogFlowSessionId) // Deactivate the follow-up confirmation
   } else if (!currentLocation.targets.find(x => x.name === query.parameters.building)!.available) {
      responseBuilder.addMessage(currentLocation.targets.find(x => x.name === query.parameters.building)!.fail_msg || "You can't go there from here.")
      responseBuilder.addContext("go_to_place-followup", 0, gameSession.dialogFlowSessionId) // Deactivate the follow-up confirmation
   } else {
      acceptMove();
   }

   return responseBuilder.build();
}