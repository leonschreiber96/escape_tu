export default class GameSession {
   public playerName: string | undefined = undefined;
   public dialogFlowSessionId: string;
   public gameStarted: boolean = false;

   constructor(dialogFlowSessionId: string) {
      this.dialogFlowSessionId = dialogFlowSessionId;
   }
}