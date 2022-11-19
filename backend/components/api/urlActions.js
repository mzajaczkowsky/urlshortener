const shortenLink = require('../../database/collections/shortenlink');

class linkActions {
    saveURL(req, res) {
    
        // const newShortenLink = new shortenLink({
        //     shorterName: 'facebook',
        //     redirect: 'http://facebook.com/',
        //     dateCreated: new Date().toUTCString()
        // })
    
        // newShortenLink.save().then(() => {
        //     console.log('Dodano dane do bazy')
        // })

        const shorterName = req.body.shortenName;
        const redirect = req.body.redirect;
        const dateCreated = req.body.dateCreated;
        
    }

    getURL(req, res) {
        
        res.send('API działa');
    }

    redirectURL(req, res) {
        res.redirect(301, '/');
    }

}

module.exports = new linkActions();