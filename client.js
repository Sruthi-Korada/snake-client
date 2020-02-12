// const stdin = process.stdin
//  stdin.resume()
//  stdin.setEncoding('utf8');
const net = require('net');
    const conn = net.createConnection({ 
      host: '192.168.88.177',
      port: 50541
    });
    // interpret incoming data as text

    conn.setEncoding('utf8'); // setting encoding into human readable msg

    conn.on('connect', (data) => {  
      console.log("Successfully connected to game server");
      conn.write("Name: sru")
    //   setInterval(() => {
    //   conn.write("Move: up");
    // }, 600);
    // setInterval(() => {
    //     conn.write("Move: down");
    //   }, 200);                           ====>  hard code
    //   setInterval(() => {
    //     conn.write("Move: left");
    //   }, 200);
    //   setInterval(() => {
    //       conn.write("Move: right");
    //     }, 200);
      
    });
    conn.on('data', (data) => {
        console.log(data);
      });
    
    
    return conn;
  
  
  
  
 