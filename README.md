# INK GM BOT

## Table Of Contents

- [INK GM BOT](#ink-gm-bot)
  - [Table Of Contents](#table-of-contents)
  - [Prerequisite](#prerequisite)
  - [INK GM](#ink-gm)
  - [BOT FEATURE](#bot-feature)
  - [Setup \& Configure BOT](#setup--configure-bot)
    - [Linux](#linux)
    - [Windows](#windows)
  - [Update Bot](#update-bot)
  - [NOTE](#note)
  - [CONTRIBUTE](#contribute)
  - [SUPPORT](#support)

## Prerequisite

- Git
- Node JS
- Wallet Funded with ETH on INKOCHAIN MAINNET

## INK GM

Daily Tap GM
Tap GM Now : [https://gm.inkonchain.com](https://gm.inkonchain.com/?to=0xE2E7Ba18acE37Db3DD27648D4Fe699D466F5f48a)

Need some fee

## BOT FEATURE

- JUST GM

## Setup & Configure BOT

### Linux

1. clone project repo
   ```
   git clone https://github.com/Hunga9k50doker/ink.git
   cd ink
   ```
2. run
   ```
   npm install
   npm run setup
   ```
3. Configure your accounts
   ```
   nano privateKeys.txt
   ```
4. to start the app run
   ```
   npm run start
   ```

### Windows

1. Open your `Command Prompt` or `Power Shell`.
2. Clone project repo
   ```
   git clone https://github.com/Hunga9k50doker/ink.git
   ```
   and cd to project dir
   ```
   cd ink
   ```
3. Run
   ```
   npm install
   npm run setup
   ```
4. Navigate to `ink` directory.
5. Navigate to root and configure `privateKeys.txt`.
6. Back to `ink` directory.
7. To start the app open your `Command Prompt` or `Power Shell` again and run
   ```
   npm run start
   ```

## Update Bot

To update bot follow this step :

1. run
   ```
   git pull
   ```
   or
   ```
   git pull --rebase
   ```
   if error run
   ```
   git stash && git pull
   ```
2. run
   ```
   npm update
   ```
3. start the bot

## NOTE

DWYOR & Always use a new wallet when running the bot, I am not responsible for any loss of assets.

## CONTRIBUTE

Feel free to fork and contribute adding or fixing some feature thanks.
