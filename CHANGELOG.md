```
Alt: below is an ASCII art of a word "Changelog".
 _____ _                   _
|     | |_ ___ ___ ___ ___| |___ ___
|   --|   | .'|   | . | -_| | . | . |
|_____|_|_|__,|_|_|_  |___|_|___|_  |
                  |___|         |___|

Alt: end of ASCII art
```

## Version 0.0.1

- **Intitialized as a Next.js app.** Weather App is something that users will open several times a day for short sessions: a minute or less. It is expected that the App loads instantly. This is why I consider making this app load server side and push prerendered html to it's users.

## Version 0.0.2

- **Fixed app's background and text color styles.** Next.js automatic conversion have broken app's background. `<div id="root">` element disappeared from html because it was defined in public/index.html. It was used in `CRA` version of this app. Fixed it by adding an `id="root"` attribute to the root div node.
- **Deleted `public/index.html` file.** Should have deleted it in the previous PR, but later is better than never.
