import Place from "./model/place"

export default class GameSession {
   public playerName: string | undefined = undefined;
   public dialogFlowSessionId: string;
   public gameStarted: boolean = false;
   public currentLocation: Place = Place.Cafeteria;
   public movingBetweenPlaces: boolean = false;
   public target: Place | undefined = undefined;
   public cheatsheet: boolean = false;
   public key: boolean = false;
   public wentPlaces: Array<any>;

   public helpText: string = "";

   constructor(dialogFlowSessionId: string) {
      this.dialogFlowSessionId = dialogFlowSessionId;
   }
}