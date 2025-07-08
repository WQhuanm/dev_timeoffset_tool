var express = require('express');
var router = express.Router();
var path = require('path');
var exec = require('child_process').exec
const moment = require('moment');

router.get('/ping', function (req, res) {
  res.send('ok\n');
});

/* GET home page. */
router.get('/', function (req, res) {
  let configDir = path.resolve(__dirname, '../script/currentTime.sh');
  let cmd = "bash " + configDir;
  console.log("exec : " + cmd);

  exec(cmd, function (err, stdout) {
    console.log("debug:\n" + err);
    console.log("currentTime: " + stdout);

    let nowMoment = moment(new Date(stdout));

    let currentTimeStr = nowMoment.format('YYYY-MM-DD HH:mm:ss');
    let currentTimeCtl = nowMoment.format('YYYY-MM-DDTHH:mm');
    let viewData = {
      currentTimeStr,
      currentTimeCtl,
    };
    res.render('index', viewData);
  });
});

router.post('/timeoffset', function (req, res) {
  let targetMoment = moment(req.body.target, 'YYYY-MM-DDTHH:mm');
  let targetDate = targetMoment.format('YYYY-MM-DD HH:mm:ss');
  console.log('设置系统时间: ' + targetDate)

  let configDir = path.resolve(__dirname, '../script/changetime.sh');
  let cmd = `bash ${configDir} "${targetDate}"`;
  console.log("exec : " + cmd);
  exec(cmd);

  res.redirect('/changetime/');
});

router.post('/synctime', function (req, res) {
  console.log('还原时间');

  let configDir = path.resolve(__dirname, '../script/synctime.sh');
  let cmd = "bash " + configDir;
  console.log("exec : " + cmd);
  exec(cmd);

  res.redirect('/changetime/');
});

module.exports = router;
