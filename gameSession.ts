export default class GameSession {
   private playerName: string | undefined = undefined;

   public setPlayerName(name: string) {
      this.playerName = name;
   }
}