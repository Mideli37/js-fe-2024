# Introduction of Electron.js

[YouTube]([link](https://www.youtube.com/watch?v=94D-sxPKhBm))

[Slides](https://rolling-scopes-school.github.io/mideli37-JSFE2023Q4/presentation/)

## Slides transcript

### Slide 1

- Electron is a framework for building desktop applications using JavaScript, HTML, and CSS.
- It’s an open-source project started by Cheng Zhao, an engineer at GitHub.
- Electron.js allows developers to create applications that run seamlessly on various operating systems, such as Windows, macOS, and Linux. This cross-platform compatibility is a significant advantage, as it enables developers to reach a broader audience with a single codebase.
- Electron uses Chromium and Node.js

### Slide 2

- A little bit of history of Electron framework
- The journey of Electron.js started in January 2013 with the search for a tool to build a cross-platform text editor on which the user can work with technologies like JavaScript, HTML, and CSS.
- It was founded on 15th July 2013, intended to make the cross-platform development easier for the creation of “Atom”. It was initially known as Atom Shell. Have a look at the image below to get a more precise idea about the journey of Electron.js.  

### Slide 3

 ![asana](https://img.shields.io/badge/asana-ccc?style=for-the-badge&logo=asana) ![1password](https://img.shields.io/badge/1password-ccc?style=for-the-badge&logo=1password) ![discord](https://img.shields.io/badge/discord-ccc?style=for-the-badge&logo=discord) ![dropbox](https://img.shields.io/badge/dropbox-ccc?style=for-the-badge&logo=dropbox) ![figma](https://img.shields.io/badge/figma-ccc?style=for-the-badge&logo=figma) ![agoraflat](https://img.shields.io/badge/agoraflat-ccc?style=for-the-badge&logo=agoraflat) ![githubdesktop](https://img.shields.io/badge/githubdesktop-ccc?style=for-the-badge&logo=github) ![itch](https://img.shields.io/badge/itch-ccc?style=for-the-badge&logo=itch) ![loom](https://img.shields.io/badge/loom-ccc?style=for-the-badge&logo=loom) ![mongodbcompass](https://img.shields.io/badge/mongodbcompass-ccc?style=for-the-badge&logo=mongodb) ![notion](https://img.shields.io/badge/notion-ccc?style=for-the-badge&logo=notion) ![obsidian](https://img.shields.io/badge/obsidian-ccc?style=for-the-badge&logo=obsidian) ![polypane](https://img.shields.io/badge/polypane-ccc?style=for-the-badge&logo=polypane) ![postman](https://img.shields.io/badge/postman-ccc?style=for-the-badge&logo=postman) ![signal](https://img.shields.io/badge/signal-ccc?style=for-the-badge&logo=signal) ![skype](https://img.shields.io/badge/skype-ccc?style=for-the-badge&logo=skype) ![slack](https://img.shields.io/badge/slack-ccc?style=for-the-badge&logo=slack) ![splice](https://img.shields.io/badge/splice-ccc?style=for-the-badge&logo=splice) ![microsoftteams](https://img.shields.io/badge/microsoftteams-ccc?style=for-the-badge&logo=microsoftteams) ![tidal](https://img.shields.io/badge/tidal-ccc?style=for-the-badge&logo=tidal) ![trello](https://img.shields.io/badge/trello-ccc?style=for-the-badge&logo=trello) ![twitch](https://img.shields.io/badge/twitch-ccc?style=for-the-badge&logo=twitch) ![vscode](https://img.shields.io/badge/vscode-ccc?style=for-the-badge&logo=visualstudiocode)

### Slide 4

Pros of using Electron

- Code Reusability
One of the standout advantages of Electron is the ability to reuse code across different platforms. With a single codebase, developers can create applications that function seamlessly on Windows, macOS, and Linux.

- Chromium
Electron uses Chromium engine for rendering UI. This means that you can get several benefits from this like Developer Tools, Storage Access, etc.

- Easy to Use
Since Electron allows developers to build desktop apps using standard web technologies — HTML5, CSS, and JavaScript — using it is pretty easy. Developers can get up and running in no time.

- Speed
When compared to standard desktop app development, it takes a lot less time to build a desktop app with Electron.

Since Electron is written in JavaScript — one of the most popular languages among software developers — debugging and optimization are also fast and easy.

- Automatic Updates
Electron includes an autoUpdater component which allows the app to update itself automatically.

This is beneficial to both users and developers. Users don't need to spend time manually updating their apps, and developers can be sure that all users are using the latest version of their desktop app.

- Compatibility
Electron works with all JS frameworks and libraries which are enough to build high-quality apps. Angular, React, Vue, Node.js - it is not a full list of tools that developers may use during Electron app development.

### Slide 5

Cons

- Memory Consumption
Despite its strengths, Electron is not without its challenges. One notable concern is its memory consumption. Electron apps may use more memory compared to native applications, potentially affecting the performance of systems with limited resources.

- Larger Application Size
Another consideration in Electron development is the size of the resulting applications. Electron apps tend to have a larger file size compared to their native counterparts.

As you know that Electron Apps run on Chromium, this means that each and every Electron App comes with its own version of Chromium. More worse Chromium is made of 20 million lines of code which is nearly the size of a whole Operating System! So it is like installing a whole Operating System on top of other for running a single app! For example a simple “Hello World” app on Electron would need more than 100mb of space.

*In conclusion*, Electron Js development offers a compelling framework for creating cross-platform desktop applications. Its advantages, including cross-platform compatibility, a supportive community, and code reusability, make it an attractive choice for many developers.

However, challenges such as memory consumption, performance concerns, and larger application size should be carefully considered.

As with any development framework, understanding the trade-offs and implementing best practices is crucial for a successful Electron Js development journey.

To keep balance between depth and engagement, let's see how works the simplest Electron app

Electron applications are set up using npm packages. The Electron executable should be installed in project's devDependencies and can be run in development mode using a script in package.json file.

The executable runs the JavaScript entry point found in the main property of package.json. This file controls Electron's main process, which runs an instance of Node.js and is responsible for your app's lifecycle, displaying native interfaces, performing privileged operations, and managing renderer processes.

Renderer processes (or renderers for short) are responsible for displaying graphical content. You can load a web page into a renderer by pointing it to either a web address or a local HTML file. Renderers behave very similarly to regular web pages and have access to the same web APIs.

A preload script contains code that runs before your web page is loaded into the browser window. It has access to both DOM APIs and Node.js environment, and is often used to expose privileged APIs to the renderer via the contextBridge API.

Because the main and renderer processes have very different responsibilities, Electron apps often use the preload script to set up inter-process communication (IPC) interfaces to pass arbitrary messages between the two kinds of processes.

For now that's all. Thank you for your attention!
