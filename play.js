const net = require('net');


const {connect} = require("./client");



/**	/**
 * Setup User Interface 	 
 * Specifically, so that we can handle user input via stdin	 */


	console.log('Connecting ...');
         

         var connection;

         const setupInput = function(conn) {
           connection = conn;
           const stdin = process.stdin;	  
           stdin.setRawMode(true); //read from key without pressing enter	  stdin.setRawMode(true); //read from key without pressing enter
           stdin.setEncoding('utf8');  //read text based on unicode	  stdin.setEncoding('utf8');

    const handleUserInput = function(key) {
        if (key === "\u0003") { //ctrl + c	  if (key === "\u0003") { //ctrl + c
          process.exit()
     }

      }	

    }
   
      module.exports = {setupInput};


  



