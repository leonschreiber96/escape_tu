export class ResponseBuilder {
   messages: string[] = [];
   contexts: {
      name: string,
      lifespanCount: number,
      parameters: { [key: string]: string | number | boolean; }
   }[] = [];
   
   public addMessage(text: string) : ResponseBuilder {
      this.messages.push(text);
      return this;
   }

   public addContext(name: string, lifespanCount: number, parameters?: { [key: string]: string | number | boolean; }): ResponseBuilder {
      this.contexts.push({
         name,
         lifespanCount,
         parameters: parameters || {}
      });
      return this;
   }

   public build(): DfResponse {
      return {
         fulfillmentMessages: this.messages.map(message => ({
            "text": {
               "text": [message]
            }
         })),
         outputContexts: this.contexts
      }
   }
}

export default interface DfResponse {
   fulfillmentMessages:{
      text?: {
         text?: string[]
      }
   } [],
   outputContexts: {
      name: string,
      lifespanCount: number,
      parameters: { [key: string]: string | number | boolean }
    }[]
}