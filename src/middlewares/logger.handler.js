function logger() {
  return (req, res, next) => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    console.log('[' + date + ' ' + time + '] [' + req.ip + '] [' + req.method + '] -> ' + req.protocol + '://' + req.get('host') + req.originalUrl);
    next();
  };
}

module.exports = logger;
