const mongoose = require('mongoose');

const shortenLink = mongoose.model('shortenLink', {
    shorterName: String,
    redirect: String,
    dateCreated: String
})

module.exports = shortenLink;