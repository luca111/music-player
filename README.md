# Music Player

Responsive music player developed with React, Redux, SASS (SCSS).

The player fetches tracks info served by a Netlify Function based on AWS Lambda.

To run the app locally, change the relative path in config.js `API_RELATIVE_PATH = ""`, start the Netlify Function locally:

```
npm run start-functions
```

and start the dev server

```
npm start
```

Music tracks licensed under Creative Commons by the respective authors.
