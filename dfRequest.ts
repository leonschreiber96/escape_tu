export default interface DfRequest {
   responseId: string;
   queryResult: QueryResult;
   originalDetectIntentRequest: any; // The payload provided by the chat service where the bot was reached
   session: string;
}

export interface QueryResult {
   queryText: string;
   parameters: any;
   allRequiredParamsPresent: boolean;
   fulfillmentText: string;
   fulfillmentMessages: {
      name: string;
      lifespanCount: number;
      parameters: any;
   }[];
   outputContexts: {
      name: string,
      lifespanCount: number,
      parameters: { [key: string]: string | number | boolean }
    }[];
   intent: {
      name: string;
      displayName: string;
      endInteraction: boolean;
   };
   intentDetectionConfidence: number;
   languageCode: string;
};

// {
//   responseId: '6b6720f7-d83b-4e58-9b91-a20310b59354-1b6a75ff',
//   queryResult: {
//     queryText: 'dsf',
//     parameters: { person: { name: 'dsf' } },
//     allRequiredParamsPresent: true,
//     fulfillmentText: 'lol no',
//     fulfillmentMessages: [
//       { text: { text: [ 'lol no' ] } }
//     ],
//     outputContexts: [
//       {
//         name: 'projects/escape-tu-cslg/agent/sessions/f8149da0-65d3-3308-9dbd-550c042d1a9e/contexts/__system_counters__',
//         parameters: {
//           'no-input': 0,
//           'no-match': 0,
//           person: { name: 'dsf' },
//           'person.original': 'dsf'
//         }
//       }
//     ],
//     intent: {
//       name: 'projects/escape-tu-cslg/agent/intents/74bcb920-4cc0-42c8-ad5f-487caffe2b2a',
//       displayName: 'guess_age'
//     },
//     intentDetectionConfidence: 0.6139487,
//     languageCode: 'en'
//   },
//   originalDetectIntentRequest: {
//     source: 'telegram',
//     payload: {
//       data: {
//         message_id: '32',
//         from: {
//           username: 'leonschreiber96',
//           id: '37147413',
//           language_code: 'en',
//           first_name: 'Leon'
//         },
//         text: 'dsf',
//         chat: { type: 'private', id: '37147413' },
//         date: '1673627041'
//       }
//     }
//   },
//   session: 'projects/escape-tu-cslg/agent/sessions/f8149da0-65d3-3308-9dbd-550c042d1a9e'
// }