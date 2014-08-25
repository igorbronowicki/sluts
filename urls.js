module.exports = function (app) {

    // sluts routes
    var sluts = require('./modules/sluts/views');
    app.get('/api/sluts', sluts.all);
    app.post('/api/sluts', sluts.create);
    app.get('/api/sluts/:slutId', sluts.read);
    app.put('/api/sluts/:slutId', sluts.update);
    app.del('/api/sluts/:slutId', sluts.delete);
    app.param('slutId', sluts.load);

    // main routes
    var main = require('./modules/main/views');
    app.get('*', main.home);

};