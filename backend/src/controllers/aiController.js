const fetchAiResponse = require('../services/aiService');

const getReview = async(req,res) => {
    const {code} = req.body;
    console.log(req.body);
    if(!code){
        return res.status(400).send("prompt is required");
    }

    const response = await fetchAiResponse(code);

    res.send(response);
};

module.exports = getReview;