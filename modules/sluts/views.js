var mongoose = require('mongoose'),
    Slut = mongoose.model('Slut'),
    _ = require('underscore');

/**
 * List of sluts
 */
exports.all = function(req, res) {
    Slut.find({}, function(err, sluts) {
        if (err) {
            res.json(200, {
                err: "Не получилось достать всех шлюх из БД!"
            });
        } else {
            res.json(200, {
                "sluts": sluts
            });
        }
    });
};

/**
 * Delete an slut
 */
exports.delete = function(req, res) {
    var slut = req.slut;

    slut.remove(function(err) {
        if (err) {
            res.json(200, {
                err: "Не получилось удалить шлюху из БД!"
            });
        } else {
            res.json(200, {
                "slut": slut
            });
        }
    });
};

/**
 * Create a slut
 */
exports.create = function(req, res) {
//    console.log(req.files.photo.name, "--req.files.photo.name");
//    console.log(req.files.photo.size, "--req.files.photo.size");
//    console.log(req.files.photo.path, "--req.files.photo.path");
//    console.log(req.files.photo.path.split("\\").slice(-1)[0], "--url"); // \\ потому что Windows?
//    console.dir(req.files, "--req.files");
    var slut = new Slut(req.body);

    slut.save(function(err) {
        res.json(200, {
            "slut": slut
        });
    });
};

/**
 * Update a slut
 */
exports.update = function(req, res) {
    var slut = req.slut;

    slut = _.extend(slut, req.body);

    slut.save(function(err) {
        res.json(200, {
            "slut": slut
        });
    });
};

/**
 * Show an slut
 */
exports.read = function(req, res) {
    res.json(200, {
        "slut": req.slut
    });
};

/**
 * Find slut by id
 */
exports.load = function(req, res, next, id) {
    Slut.findOne({
        "_id": id
    }, function(err, slut) {
        if (err) return next(err);
        if (!slut) return next(new Error('Failed to load slut ' + id));
        req.slut = slut;
        next();
    });
};