import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";
import places from "../places.json";
import Place from "../model/place";

export default function GoToPlaceConfirmIntent(gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   gameSession.currentLocation = gameSession.target!;

   if (!gameSession.visitedPlaces[gameSession.currentLocation]) {
      gameSession.visitedPlaces[gameSession.currentLocation] = true;
      const buildingText = getText(`intro ${gameSession.currentLocation}`);
      responseBuilder.addMessage(buildingText);
   } else if (gameSession.currentLocation !== Place.StudentCafe) {
      const buildingText = getText(`return ${gameSession.currentLocation}`)
      responseBuilder.addMessage(buildingText)
   } else {
      const lockState = gameSession.libraryUnlocked ? "unlocked" : "locked"
      const buildingText = getText(`return ${gameSession.currentLocation} ${lockState}`)
      responseBuilder.addMessage(buildingText);
   }

   gameSession.helpText = `You are at the ${gameSession.currentLocation}. Your possible actions are 
      ${places.find(x => x.name === gameSession.currentLocation)!
      .actions!
      .map((x, index) => `${index+1}: ${x}`).join(". ")}`

   responseBuilder.addContext(gameSession.currentLocation.replaceAll(" ", "_"), 99)
   responseBuilder.addContext("go_to_place-followup", 0)
   return responseBuilder.build();
}