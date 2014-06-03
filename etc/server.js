var path = require("path"),
    connect = require("connect"),
    ss = require("serve-static"),
    path_to = path.join(__dirname, "..");

console.log(path_to);

connect().use(ss(path_to)).listen(1337);
