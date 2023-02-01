import Place from "./model/place"


export default class GameSession {
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
   public libraryUnlocked: boolean = false;
   public hasCheatSheet: boolean = false;

   public helpText: string = "";

   constructor(dialogFlowSessionId: string) {
      this.dialogFlowSessionId = dialogFlowSessionId;
   }

   public reset() {
      this.gameStarted = false;
      this.currentLocation = Place.Cafeteria;
      this.movingBetweenPlaces = false;
      this.target = undefined;
      this.visitedPlaces.Cafeteria = true;
      this.visitedPlaces.Library = false;
      this.visitedPlaces["Main Building"] = false;
      this.visitedPlaces["Math Building"] = false;
      this.visitedPlaces["Student Café"] = false;
      this.libraryUnlocked = false;
      this.hasCheatSheet = false;
      this.helpText = "You're in the cafeteria. You wanted to get your laptop from the library, remember? Now you have to decide where to go: main building, library or student café?"
   }
}