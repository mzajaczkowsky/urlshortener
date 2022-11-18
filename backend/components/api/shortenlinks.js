const shortenLink = require('../../database/collections/shortenlink');

module.exports = {
    saveURL(req, res) {
    
        const newShortenLink = new shortenLink({
            shorterName: 'facebook',
            redirect: 'http://facebook.com/',
            dateCreated: new Date().toUTCString()
        })
    
        newShortenLink.save().then(() => {
            console.log('Dodano dane do bazy')
        })

    }
}