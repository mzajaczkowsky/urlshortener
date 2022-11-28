const shortenLink = require('../../database/collections/shortenlink');

class linkActions {
    async saveURL(req, res) {
        
        const shorterName = req.body.shorterName;
        let redirect = req.body.redirect;
        if(!redirect.startsWith("http")){
            redirect = `https://${redirect}`;
        }
        // const dateCreated = req.body.dateCreated;
        
        const result = await shortenLink.findOne({shorterName: shorterName});

        try {
            if(!result){
                const newShortenLink = new shortenLink({
                shorterName: shorterName,
                redirect: redirect,
                dateCreated: new Date().toUTCString()
            })    
                await newShortenLink.save();                
                res.status(200).json({...newShortenLink, url: `${req.get("host")}/r/${shorterName}`});
            }
            else{
                res.status(400).json({message: "Name already exists"})
            }
        }        
        catch (e) {
            console.error(e);
        }       
    }

    async getURL(req, res) {
        const urlID = req.params.parameter;
        const result = await shortenLink.findOne({shorterName: urlID});
        console.log(result);
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