// Dead simple server to serve up
// static content without a need for
// apache, express, or PHP


var connect = require("connect"),
    ss = require("serve-static");
    
// Start up the server on 1337, aimed @ the "/src" dir  
connect().use(ss(__dirname + "/src")).listen(1337);