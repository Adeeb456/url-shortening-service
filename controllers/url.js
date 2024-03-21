const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenerateNewShortURL(request, response){
    if(!request.body){
        console.log('URL required for shortening, found no URL!');
        return response.status(400).send('URL is mandatory to provide!');
    }
    const generatedId = shortid.generate();
    try{
        await URL.create(
            {
                shortUrl : generatedId,
                longUrl : request.body.url
            }
        );
        return response.status(201).send(generatedId);
    }
    catch(error){
        console.log(error);
        return response.status(500).send('Internal server error!');
    }
}


async function handleGetLongUrlFromShortUrl(request, response){
    const shortId = request.params.shortId;
    const document = await URL.findOneAndUpdate({
        shortUrl : shortId
    },
        {
            $push:{
                visitHistory:{
                    timeStamp : Date.now()
                },
            }
        },
        { new: true } // Return the updated document
        );
    if(document){
        return response.send(document.longUrl);
    }
    return response.status(404).send('No short URL found for given URL, Generate one to get it!');    
}

async function handleGetTotalNumberOfClicks(request, response){
    const shortId = request.params.shortId;
    const document = await URL.findOne({
        shortUrl : shortId
    });
    if(document){
        response.json({
            'totalClicks' : document.visitHistory.length,
            'history' : document.visitHistory
        });
    }
    return response.status(404).send('Generate a short URL to get analytics! You have not shortened this URL yet! ');
}

module.exports={handleGenerateNewShortURL, handleGetLongUrlFromShortUrl, handleGetTotalNumberOfClicks};