import express from "express";
import bodyParser from "body-parser";
import dfRequest from "./dfRequest";
const app = express();

app.use(bodyParser.json());

app.use("/", (req, res, next) => {
   console.log("Request received");
   next();
})

app.post('/', async (req, res) => {
   const request = req.body as dfRequest;
   const query = request.queryResult;
   
   if (req.body.queryResult.intent.displayName === 'guess_age') {
      res.send({
         "fulfillmentMessages": [
            {
               "text": {
                  "text": [
                     `Tough one! I'd guess around ${await predictAge(req.body.queryResult.parameters.person.name)}...?`
                  ]
               }
            }
         ]
      });
   }
});

async function predictAge(name: string) {
   console.log(name);
   return Math.random() * 100;
}

app.get('/webhook', (req, res) => {
   console.log(req.body);
   res.send('Hello World!');
});

app.listen(5001, () => console.log('Example app listening on port 5001!'));