#! /usr/bin/env node

const { program } = require("commander");
const myhelp = require("../lib/core/help.js");
const mycommander = require("../lib/core/mycommander.js");

myhelp(program);
mycommander(program);


program.parse(process.argv);
