require("dotenv").config();
const axios = require("axios");

const { App } = require("@slack/bolt")

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/baguette-ping", async ({command,ack,respond}) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond ({ text: `Baguette is Up!\nLatency: ${latency}ms`});
});

app.command("/baguette-flip", async ({command,ack,respond}) => {
  const roll = Math.random()
  let result;
  await ack();

  if (roll > 0.5) {
   result = `The flip was 👀 \nHeads! :sho:`}
  else {
   result = `The flip was 👀 \nTails! :dam:`
  }

  await respond ({ 
    text : result,
    response_type : "in_channel",
});
});

app.command("/baguette-help", async ({command,ack,respond}) => {
  await ack();
  await respond({
      text: `Availaible Commands:
      /baguette-ping : Check the bot's latency
      /baguette-dog : Fetches an image from the Nasa API.
      /baguette-help : The help command for @Baguette slackbot(current occurence)`
});
});

app.command("/baguette-dog", async ({command,ack,respond}) => {
  await ack();
  const response = await axios.get("https://dog.ceo/api/breeds/image/random");
  try {
  await respond ({
    blocks: [{
      type: 'image',
      image_url: response.data.message,
      alt_text: 'a random dog'
    }
  ]
  }); }
  catch(err) {
    console.error(err);
    await respond ({text: `Failed to fetch one :( Looks like even the dogs are angry.`})
  }
});


(async () => {
  await app.start();
  console.log ("bot is up");
})();