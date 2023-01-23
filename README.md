# Dev Guide

## Intent handlers

An intent handler is a function that gets called when a certain intent is recognized by DialogFlow. Here you can write all necessary logic for the specific intent. 

| Parameter | Type | Description |
| --- | --- | --- |
| gameSession | [GameSession](https://github.com/Snowfire01/escape_tu/blob/ae4609f118776081574f0936226a9cd9e1b7e322/gameSession.ts) | The current state of the game. Info about what places have been visited, etc. |
| query | [QueryResult](https://github.com/Snowfire01/escape_tu/blob/ae4609f118776081574f0936226a9cd9e1b7e322/dfRequest.ts#L8) | The query that has been sent by DialogFlow. Contains info like the exact message the user sent, which parameters are active, etc.

### Creating a new intent handler

The following code template can be used to create a new intent handler. The [`ResponseBuilder`](https://github.com/Snowfire01/escape_tu/blob/ae4609f118776081574f0936226a9cd9e1b7e322/dfResponse.ts#L1) class can be used to compile a response in a DialogFlow-friendly format. The `addMessage(...)` function can be used to add a text message to the response. With `addContext(...)` a context with a certain lifespan can be set.

``` typescript
import GameSession from "../gameSession";
import { QueryResult } from "../dfRequest";
import DfResponse, { ResponseBuilder } from "../dfResponse";
import getText from "../getText";

export default function [Intent Display Name](gameSession: GameSession, query: QueryResult): DfResponse | undefined {
   const responseBuilder = new ResponseBuilder();

   // Write the intent handling here

   return responseBuilder.build();
}
```

The file must be saved as **<i>[Intent Display Name].ts</i>**, with [Intent Display Name] referring to the exact display name of the intent in the DialogFlow console, so that it can be matched by the server and passed along accordingly.

## Adding prewritten texts and SSML
With the `getText(...)` function you can import texts from the `texts` folder. Import the function as shown in the IntentHandler code snippet above and use it like

``` typescript
const text = getText("[Text file name without .txt]")
responseBuilder.addMessage(text);
```

### SSML
You can use SSML to include audio files, change voice, intonation, tempo and similar stuff. Refer to the documentation under https://cloud.google.com/text-to-speech/docs/ssml for more information.
