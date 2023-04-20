const nodemon = require("nodemon");
const concurrently = require("concurrently");
const chalk = require("chalk");
const fs = require("fs");
const path = require("path");

const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), "package.json"), "utf8"));

if (packageJson.smarbiWatch) {
  const smarbiWatch = packageJson.smarbiWatch;

  if (
    smarbiWatch.watchFolder === undefined ||
    smarbiWatch.startCommands === undefined ||
    smarbiWatch.extensions === undefined
  ) {
    throw new Error('Invalid watch config: "' + JSON.stringify(smarbiWatch) + '"');
  }

  nodemon({
    watch: [smarbiWatch.watchFolder],
    ext: smarbiWatch.extensions,
    exec: "yalc push --changed"
  });

  nodemon
    .on("start", function() {
      console.log(`${chalk.magentaBright("watch has started")}`);
    })
    .on("quit", function() {
      process.exit();
    })
    .on("restart", function(files) {
      console.log(chalk.blueBright("Found changes in files:", chalk.magentaBright(files)));
      console.log(chalk.blueBright("Trying to push ..."));
    });

  concurrently([...smarbiWatch.startCommands]);
} else {
  console.log(
    chalk.redBright("Error: watch could not find a Watch section in your package.json file, exiting")
  );
}