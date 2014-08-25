var express = require('express'),
    mongoose = require('mongoose');

// Подключаемся к БД
mongoose.connect("mongodb://localhost/sluts");

// Загружаем модели
require('./modules/sluts/models');

// Создаем приложение изпользуя express
var app = express();

// Настраиваем express
require('./express')(app);

// Настраиваем маршрутизатор запросов
require('./urls')(app);

// Приложение будет слушать порт
app.listen(3000);
console.log('Check 127.0.0.1:3000 out');