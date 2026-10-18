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

app.command("/baguette-help", async ({command,ack,respond}) => {
  await ack();
  await respond({
      text: `Availaible Commands:
      /baguette-ping : Check the bot's latency
      /baguette-flip : Randomly rolls Heads or Tails.
      /baguette-nasa : Fetches an image from the Nasa API.
      /baguette-help : The help command for @Baguette slackbot(current occurence)`
});
});

app.command("/baguette-flip", async ({command,ack,respond}) => {
  await ack();
  await respond();

  const roll = Math.random()
  if (roll==1) {}

});




(async () => {
  await app.start();
  console.log ("bot is up");
})();