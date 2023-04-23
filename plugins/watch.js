const nodemon = require('nodemon')
const concurrently = require('concurrently')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const childProcess = require('child_process')

const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'))

if (packageJson.smarbiWatch) {
  const smarbiWatch = packageJson.smarbiWatch

  if (
    smarbiWatch.watchFolder === undefined ||
    smarbiWatch.startCommands === undefined ||
    smarbiWatch.extensions === undefined
  ) {
    throw new Error('Invalid watch config: "' + JSON.stringify(smarbiWatch) + '"')
  }

  nodemon({
    watch: [].concat(smarbiWatch.watchFolders),
    ext: smarbiWatch.extensions
  })

  nodemon
    .on('start', function () {
      console.log(`${chalk.magentaBright('watch has started')}`)
    })
    .on('quit', function () {
      let cmd = 'yalc remove'
      childProcess.exec(cmd)
      process.exit()
    })
    .on('restart', function (files) {
      console.log(chalk.blueBright('Found changes in files:', chalk.magentaBright(files)))
      console.log(chalk.blueBright('Trying to push ...'))
      childProcess.exec('yalc push --changed')
      let cmd = 'npm run build-lib && yalc push --changed'
      let noFresh = files.every((file) => {
        return file.includes('lib')
      })
      if (noFresh) {
        return
      }
      childProcess.exec(cmd)
    })

  concurrently([].concat(smarbiWatch.startCommands))
} else {
  console.log(
    chalk.redBright('Error: watch could not find a Watch section in your package.json file, exiting')
  )
}
