
/*
 * GET home page.
 */

exports.index = function(req, res){
  data = {
    host: 'localhost',
    port: 8000,
    dashboard: 'dashboard',
    token: 'd241e110f40d1def4dc5bc33120b7bb1',
    }

  res.render('index', data);
};
