export default interface dfRequest {
   responseId: string;
   queryResult: {
      queryText: string;
      parameters: any;
      allRequiredParamsPresent: boolean;
      fulfillmentText: string;
      fulfillmentMessages: any[];
      outputContexts: any[];
      intent: {
         name: string;
         displayName: string;
      };
      intentDetectionConfidence: number;
      languageCode: string;
   };
   originalDetectIntentRequest: {
      source: string;
      payload: {
         data: {
            message_id: string;
            from: {
               username: string;
               id: string;
               language_code: string;
               first_name: string;
            };
            text: string;
            chat: {
               type: string;
               id: string;
            };
            date: string;
         };
      };
   };
   session: string;
}

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