# React Reddit Place

Node and React based implementation of Reddit Place.
Uses socket.io for live-updates from other users.

![demo preview](./preview.gif?raw=true)

## External Storage

This app leverages an external store (webtask.io) for storing the drawing. To set up your own external store:

- Create a new webtask at https://webtask.io/make
- Copy/paste the code in webtask_drawing.js into your webtask.
- Save
- Grab the public URL for your webtask at the bottom of the webtask editor
- Replace the value of `WEBTASK_STORAGE_URL` inside `server/DrawingStore.js`

## How to Start

- Follow steps above to set up external storage
- Build your React app
- `npm run build-react`
- Start your server
- `npm start`

Note: Remember to build your web code.  The webpack-dev-server content does not get hosted by node.

## Directory Structure

- `build` - Built web app
- `public` - Template html from create-react-app
- `server` - Node Server code
- `src` - Front-end code
