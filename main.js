const moment = require('moment');
const chalk = require('chalk');


    console.log("It is " + chalk.blue.bold(moment().format("dddd, MMMM Do YYYY, h:mm:ss a" + ".")));

    console.log("It is the " + chalk.magenta.bold(moment().format("DDDo")) + " day of the year.");

    console.log("It is " + chalk.cyan.bold(moment.duration().get('seconds')) + " seconds into the day.");

    if (moment().isDST() === true) {
      console.log("It " + chalk.green.bold("is ") + "during Daylight Savings Time.");
    }else{
      console.log(("It " + chalk.green.bold("is ") + " not during Daylight Savings Time."));
    }

    if (moment().isLeapYear() === true) {
      console.log("It " + chalk.redBright.bold("is ") + " a leap year.");
    }else{
      console.log("It " + chalk.redBright.bold("is not ") + " a leap year.");
    }
