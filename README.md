# KUPTM Chit Chat

![KUPTM Chit Chat logo](./public/logo/logo.svg)

## Features

- Multiple peers per room (limited only by the number of peer connections your browser supports).
- Public and private rooms.
- Video and audio chatting.
- Screen sharing.
- File sharing:
  - Unlimited file size transfers.
  - Files are encrypted prior to sending and decrypted by the receiver (the key is the roon name).
- Markdown support via [`react-markdown`](https://github.com/remarkjs/react-markdown).
  - Includes support for syntax highlighting of code.
- Conversation backfilling from peers when a new participant joins.
- Multiline message support (hold `shift` and press `enter`).
- Dark and light themes.

## Anti-features

- Messages are never persisted to disk. When you leave a peer room, messages are cleared from memory and cannot be retrieved.
- KUPTM Chit Chat is an entirely client-side communication app. It uses public WebTorrent servers to establish peer connections and STUN/TURN relay servers when direct peer-to-peer connections cannot be established, but there is no KUPTM Chit Chat API server.
- No analytics, tracking, or telemetry of any kind.
- This is a community-driven and unfunded project that makes no money. The users come first and there is no corporate influence or financial interest involved.
## Use cases

Kuptm Chit Chat is a safe and private tool that can be used for:

Creating groups of people, like clubs or organizations
Sending messages and data easily between devices
Video chatting with friends and family on different types of devices
Getting help with computer problems by sharing screens
Live streaming
Sharing private information like passwords
And much more!
## Available Scripts

In the project directory, you can run:

### `npm dev`

Runs the entire stack (client + WebTorrent tracker) locally.

### `npm start`

Runs the front end app in the development mode. Uses public WebTorrent trackers.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.