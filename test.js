"use strict";
var isWorking = require("./index.js");
if (isWorking()) {
    console.log("is-working is working");
    process.exit(0);
} else {
    console.error("is-working is not working");
    process.exit(1);
}
