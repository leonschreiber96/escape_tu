import express from "express";
import bodyParser from "body-parser";
import DfRequest, { QueryResult } from "./dfRequest";
import DfResponse from "./dfResponse";
import GameSession from "./gameSession";

import GreetingIntent from "./intentHandlers/greetingIntent"
import EndGameIntent from "./intentHandlers/endGameIntent"
import EnterAudimaxIntent from "./intentHandlers/enterAudimaxIntent";
import StartGameIntent from "./intentHandlers/startGameIntent";
import GoToPlaceIntent from "./intentHandlers/goToPlaceIntent";
import GoToPlaceAbortIntent from "./intentHandlers/goToPlaceAbortIntent";
import GoToPlaceConfirmIntent from "./intentHandlers/goToPlaceConfirmIntent";
import RepeatInstructionsIntent from "./intentHandlers/repeatInstructionsIntent";
import TalkPorterIntent from "./intentHandlers/talkPorterIntent";
import BackToFoyerIntent from "./intentHandlers/backToFoyerIntent";


const app = express();

const intentMap: { [key: string]: ((session: GameSession, query: QueryResult) => DfResponse | undefined) } = {
   "0.0_greeting": GreetingIntent,
   "1.0_start_game": StartGameIntent,
   "endGame": EndGameIntent,
   "talk_porter - no": EnterAudimaxIntent,
   "go_to_place": GoToPlaceIntent,
   "go_to_place - yes": GoToPlaceConfirmIntent,
   "go_to_place - no": GoToPlaceAbortIntent,
   "repeat_instructions": RepeatInstructionsIntent,
   "talk_porter - yes": TalkPorterIntent,
   "hear_lecture_again - yes": EnterAudimaxIntent,
   "hear_lecture_again - no": BackToFoyerIntent

}

const gameSessions: GameSession[] = [];

app.use(bodyParser.json());
app.use("/", (req, res, next) => {
   const request = req.body as DfRequest;
   const query = request.queryResult;

   console.log(query.intent.displayName, query.intent.endInteraction ? "-> end interaction" : "");
   console.log("   Params:", query.parameters);
   console.log("   Contexts:", query.outputContexts.map(context => context.name + "(" + context.lifespanCount + ")"));
   res.locals.dfRequest = request;
   res.locals.query = query   
   next();
})

app.post('/', async (_, res) => {
   const request = res.locals.dfRequest;
   const query = res.locals.query;

   // Get the query handler whose name matches the name of the incoming, recognized intent
   const intentHandler = intentMap[query.intent.displayName];

   if (intentHandler) {
      var gameSession = gameSessions.find(session => session.dialogFlowSessionId === request.session);
      if (!gameSession) {
         gameSession = new GameSession(request.session);
         gameSessions.push(gameSession);
      }
      const response = intentHandler(gameSession, query);
      res.json(response);
   } else {
      console.log("No intent handler found for " + query.intent.displayName);
   }
});

app.listen(5001, () => console.log('Example app listening on port 5001!'));