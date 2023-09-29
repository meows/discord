# Discord Bot

## Installation

Clone the repository.

```bash
git clone git@github.com:meows/discord
```

Install dependencies.

```bash
cd discord && npm i
```

## Secrets

Go to the Discord [developer portal] and create a new application.

Create a local `.env` file at the root of your application with these properties
from your developer portal:
- `DISCORD_ID` - The client ID of your application.
- `DISCORD_TOKEN` - The bot token of your application.
- `DISCORD_PERMISSION` - The permissions integer of your application.

```env
DISCORD_ID =
DISCORD_TOKEN =
DISCORD_PERMISSION =
```

## Local Development

Start the dev server.
```bash
npm run dev
```

<!-- ----------------------------------------------------------------------- -->

[developer portal]: (https://discord.com/developers/applications)