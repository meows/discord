import Discord from "discord.js"


// —————————————————————————————————————————————————————————————————————————————
// Environment

const target_channel = "bot"

const client = new Discord.Client({
   intents: [
      
   ]
})

// —————————————————————————————————————————————————————————————————————————————
// Bot

client.on("ready", () => {
   const channel_id = client.channels.cache.get(target_channel)!
   const channel = channel_id as Discord.TextChannel
   channel.send("Hello World!")
})

client.login(process.env.DISCORD_TOKEN)