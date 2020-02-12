const net = require('net');
    const conn = net.createConnection({ 
      host: '192.168.88.177',
      port: 50541
    });
    // interpret incoming data as text
    conn.setEncoding('utf8'); 
  
    return conn;
  
  
 