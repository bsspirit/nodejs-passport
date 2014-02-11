exports.list = function (req, res) {
    var html = "<h2>你好, " + req.user.username + "</h2><a href='/logout'>退出</a>";
    res.send(html);
};