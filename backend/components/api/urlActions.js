const shortenLink = require('../../database/collections/shortenlink');

class linkActions {
    async saveURL(req, res) {
        
        const shorterName = req.body.shorterName;
        const redirect = req.body.redirect;
        // const dateCreated = req.body.dateCreated;
    
        const newShortenLink = new shortenLink({
            shorterName: shorterName,
            redirect: redirect,
            dateCreated: new Date().toUTCString()
        })
    
        await newShortenLink.save();
        res.status(200).json(newShortenLink);
        // newShortenLink.save().then(() => {
        //     console.log('Dodano dane do bazy')
        // })        
    }

    async getURL(req, res) {
        const urlID = req.params.parameter;
        const result = await shortenLink.findOne({shorterName: urlID});
               
        try{

            if (result){
                res.status(301).redirect(result.redirect);
            } else {
                res.status(301).redirect("http://localhost:8080/shortener/404");
            }

        }catch(e){
            console.error(e);
        }
    }

    redirectURL(req, res) {
        res.redirect(301, '/');
    }

}

module.exports = new linkActions();