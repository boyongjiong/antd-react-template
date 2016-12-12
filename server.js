var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var swig = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var _ = require('underscore');

var routes = require('./app/routes');

var app = express();

app.set('port', process.env.PORT || 4001);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


/**
 * 这个中间件在每次请求时都会执行。
 * 此处(server.js中) Router.run 和 main.js中Router.run的主要区别是应用如何渲染的
 * 客户端： 渲染完成的HTML标记将被插入到<div id="app"></div>
 * 服务端： 渲染完成的HTML标记将被发到index.html模板，然后被Swig模板引擎插入到<div id="app"{{html|safe}}></div>
 */
app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
        var html = ReactDOM.renderToString(React.createElement(Router.RouterContext, renderProps));
        var page = swig.renderFile('views/index.html', { html: html });
        res.status(200).send(page);
        // res.status(200).send(renderToString(<RouterContext {...renderProps} />));
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});


app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
