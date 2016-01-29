#! /usr/bin/env node
/*
 * Oink!
 *
 * Copyright (c) 2016 Martin Emmert
 * Licensed under the MIT license.
 * https://github.com/martinemmert/oink/blob/master/LICENSE.md
 */

var path    = require("path"),
    fs      = require('fs-extra'),
    colors  = require("colors"),
    program = require("commander"),
    exec    = require("child_process").exec,
    Promise = require("promise"),
    Spinner = require('cli-spinner').Spinner;

var
    args = process.argv.slice(2);

program
    .version("0.0.1")
    .usage("<project-directory>".green)
    .parse(process.argv);

if (args.length == 0) program.help();


var targetDir       = args[0],
    moduleDir       = path.parse(module.filename).dir,
    templateDir     = "templates",
    targetDirPath   = path.resolve(".") + path.sep + targetDir,
    moduleDirPath   = path.resolve(moduleDir),
    templateDirPath = path.resolve(moduleDirPath + path.sep + templateDir),
    spinner         = null;

//
// creates the target directory
//
function createTargetDirectory() {
    return new Promise(function (resolve, reject) {
        fs.ensureDir(targetDirPath, function (err) {
            if (err) reject(err);
            resolve(targetDir);
        });
    });
}

function copyTemplateFiles() {
    return new Promise(function (resolve, reject) {
        fs.copy(templateDirPath, targetDirPath, function (err) {
            if (err) reject(err);
            resolve();
        });
    });
}

function createTargetDirectorySuccess() {
    console.log("\n\t(°◦◦°)∽".magenta);
    console.log("\n✓ ".green + "created the project directory ".grey + targetDir.cyan);
    return copyTemplateFiles();
}

function createTargetDirectoryError(err) {
    console.error(err);
}

function copyTemplateFilesSuccess() {
    console.log("✓ ".green + "copied the needed files into your project directory".grey);
    return installNodeModules();
}

function copyTemplateFilesError(err) {
    console.log(err);
}

function installNodeModules() {
    return new Promise((resolve, reject) => {
        process.chdir(targetDirPath);
        spinner = new Spinner("%s ".yellow + "installing all needed node modules, ".grey + "this might take a while".grey.underline);
        spinner.setSpinnerString(19);
        spinner.start();
        run("npm install", resolve, reject);
    });
}

function installNodeModulesSuccess(result) {
    spinner.stop(true);

    if (result.indexOf("ERR") != -1) {
        console.log("✗ ".red + "failed to install all needed node modules".grey);
        console.log("\n" + result.red);
        console.log("● please check the error message and if you need help feel free to submit an issue on:".grey);
        console.log("● ".grey + "https://github.com/martinemmert/oink/issues\n\n".white.underline);
        return Promise.reject();
    } else {
        console.log("✓ ".green + "installed all needed node modules".grey);
        if (result.indexOf("WARN") != -1) {
            console.log("\n" + result.yellow);
        }
        console.log("● You might want to run ".grey + "npm init".white + " to update/edit your npm and bower package settings".grey);
        console.log("● Bower is not used per default but included and ready to rock - if you want to use it hit ".grey + "bower init".white);
        console.log("● Don't forget to go to your newly created project folder -> ".grey + "cd " + targetDir.white);
        console.log("\nAvailable Grunt tasks:".underline);
        console.log("\n● ".grey + "grunt dev " + "starts a server and watches your files, css is live reloaded".grey);
        console.log("● ".grey + "grunt build " + "compiles your project".grey);
        console.log("● ".grey + "grunt serve-build " + "compiles your project and starts a static server".grey);

        return Promise.resolve();
    }
}

function installNodeModulesError(err) {
    console.error(err);
}

function run(cmd, resolve, reject) {
    exec(cmd, function (error, stdout, stderr) {
        if (stderr !== null) {
            resolve(stderr);
        }
        if (stdout !== null) {
            resolve(stdout);
        }
        if (error !== null) {
            reject(error);
        }
    });
}

function oink() {
    console.log("\nHappy coding and thanks for using Oink!\n\n".magenta);
}

createTargetDirectory()
    .then(createTargetDirectorySuccess, createTargetDirectoryError)
    .then(copyTemplateFilesSuccess, copyTemplateFilesError)
    .then(installNodeModulesSuccess, installNodeModulesError)
    .then(oink);