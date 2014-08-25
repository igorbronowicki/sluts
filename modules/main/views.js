/**
 * View для главной страницы Main
 */

exports.home = function(req, res) {
    res.render('./main/templates/index', {
        title: "Funny sluts"
    });
};