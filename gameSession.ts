import Place from "./model/place"


export default class GameSession {
   public playerName: string | undefined = undefined;
   public dialogFlowSessionId: string;
   public gameStarted: boolean = false;
   public currentLocation: Place = Place.Cafeteria;
   public movingBetweenPlaces: boolean = false;
   public target: Place | undefined = undefined;
   public visitedPlaces: Record<Place, boolean> = {
      "Cafeteria": true,
      "Library": false,
      "Main Building": false,
      "Math Building": false,
      "Student Café": false
   }

   public helpText: string = "";

   constructor(dialogFlowSessionId: string) {
      this.dialogFlowSessionId = dialogFlowSessionId;
   }
}