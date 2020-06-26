const express = require('express')
const app = express()
const port = process.env.PORT || 4005
const path = require('path');

app.set('etag', false)

//Remove this if you dont want CORS
app.use((req, res, next) => {
  /* Allow anyone to access it from any page - Comment/Remove line below if you do not want this */
  res.setHeader('Access-Control-Allow-Origin', '*');
  /* Dont cache results*/
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", 0);
  next();
})

app.get('/api', (req, res, next) => {

    let ipAddr = req.headers["x-forwarded-for"];
    if (ipAddr){
      let list = ipAddr.split(",");
      ipAddr = list[list.length-1];
    } else {
      ipAddr = req.connection.remoteAddress;
    }

     /* 
     If you do "if(req.query['myip']) {}, JS will return false since 
     theres no input so check to see if theres a key in the object
     */
    if('myip' in req.query)
    {
      res.json({"status": 1, "ip": ipAddr, 'command': "myip"})
    }
    else if('ipinput' in req.query)
    {
        //If there is no api input, use the clients IP address
        let ipCheck = (req.query.ipinput === undefined) ? ipAddr : req.query.ipinput;
            
        if(ipCheck.match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/))
        {
            let dns = require('dns')
            let revIP = ((ipCheck.split(".")).reverse()).join(".");
            let dnsRun = dns.lookup(`${revIP}.dnsel.torproject.org`,  (error, result) => {
                if(result === undefined)
                {
                    res.json({'status': 1, 'result': 0, 'command': 'isTor', 'ip': ipCheck});
                }
                else if(result === '127.0.0.2')
                {
                    res.json({'status': 1, 'result': 1, 'command': 'isTor', 'ip': ipCheck});
                }
                else 
                {
                    res.json({"status": -1, "error": "DNS Query Produced Unexpected Results", 'command': 'isTor', 'ip': ipCheck})
                }
            });

        }
        else
        {
            res.json({"status": -1, "error": "Invalid IP Address", 'command': 'isTor', 'ip': ipCheck})
        }
    }
    else
    {
      res.json({"status": -1, "error": 'Invalid request'})
    }
   
    
})

app.use('/', express.static(path.join(__dirname, 'static')))

app.listen(port, () => console.log(`Tor Detector Server listening on Port ${port}`))


