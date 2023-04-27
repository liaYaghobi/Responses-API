const Response = require("../models/responses.model")
const async = require("async")


exports.register = async (req, res) => {
    //basic validation
    if (!req.body.user_id || !req.body.questionnaire_id || !req.body.timestamp || !req.body.responses) {
        res.status(400).send({ message: "All fields are required!"});
        return;
    }
    try {
        const Responses = new Response({
            user_id: req.body.user_id,
            questionnaire_id: req.body.questionnaire_id,
            timestamp: req.body.timestamp,
            responses: req.body.responses
        })

        try {
            await Responses.save()
            res.status(201).json({ success: true, message: "Responses created successfully" });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }

    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }

}
