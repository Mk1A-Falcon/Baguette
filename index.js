require("dotenv").config();

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

app.command("/baguette-flip", async ({command,ack,respond})) => {
  const roll = Math.random()
  if (roll==1);

});




(async () => {
  await app.start();
  console.log ("bot is up");
})();