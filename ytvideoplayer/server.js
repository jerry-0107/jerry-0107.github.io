const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const path = require("path")
var bodyParser = require('body-parser');
const NodeCache = require('node-cache'),
    Mcache = new NodeCache({ stdTTL: 900 });
const cors = require('cors')



var randomCheckList = []
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (randomCheckList.includes(randomNumber)); // 檢查數字是否已存在於列表中
    randomCheckList.push(randomNumber)
    return randomNumber;
}

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post("/put", (req, res) => {

    const rantxt = `${getRandomInt(100000, 999999)}`;
    var obj = req.body.obj
    Mcache.set(rantxt, obj)

    console.log("[send]", req.body.obj, rantxt)
    //  res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify({ "success": true, "rantxt": rantxt }))
    res.end()
})

app.post("/get", (req, res) => {
    var uid = req.body.uid
    res.send(JSON.stringify({
        obj: Mcache.get(uid)
    }))
})

app.post("/delete", (req, res) => {

})

app.post("/query", (req, res) => {
    var uid = String(req.body.uid)
    //res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify({
        status: Mcache.get(uid)
    }))
    res.end()

})

app.listen(port, () => {
    console.log('Server is running on port ', port);
});
