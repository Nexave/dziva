# breuninger
если node.js новых версий, то для избегания ошибки "primodials not defined" 
https://stackoverflow.com/questions/55921442/how-to-fix-referenceerror-primordials-is-not-defined-in-node-js/#answer-60921145

In the same directory where you have package.json create a npm-shrinkwrap.json file with the following contents:

    {
      "dependencies": {
        "graceful-fs": {
            "version": "4.2.2"
         }
      }
    }
Run 'npm install', and don't worry, it will update npm-shrinkwrap.json with a bunch of content.

Run 'gulp' to start the project.
