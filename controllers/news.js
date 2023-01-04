const News = require('../models/new')

module.exports = {
    new: newNews,
    create
}

function newNews(req, res) {
    res.render('news/new')
}

function create(req, res) {

}