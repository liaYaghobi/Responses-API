const Questionnaire = require("../models/form.model")
const async = require("async")


exports.detail = (req, res, next) => {
  async.parallel(
    {
      qs(callback) {
        Questionnaire.findOne({ name: req.params.name }).exec(callback);
      },
    },
    (err, results) => {
      if (err) {
        console.error(err); // Log the error
        return res.status(500).json({ message: "Something went wrong" }); // Send error message to client
      }
      if (results.qs == null) {
        const err = new Error("Questionnaire not found");
        err.status = 404;
        console.error(err); // Log the error
        return res.status(404).json({ message: "Questionnaire not found" }); // Send error message to client
      }
      res.send(results.qs);
    }
  );
};

//create a new Questionnaire 
exports.register = async (req, res) => {
    //if no name OR no questions
    if (!req.body.name || !req.body.questions) {
      res.status(400).send({ message: "Fields are empty!"});
      return;
    }
  
    try {
      const existingQuestionnaire = await Questionnaire.findOne({ name: req.body.name });
  
      if (existingQuestionnaire !== null) {
        res.status(400).send({ message: "Questionnaire with this name already exists!" });
        return;
      }
  
      const questionnaire = new Questionnaire({
        name: req.body.name,
        questions: req.body.questions 
      });
  
      await questionnaire.save();
      res.status(201).send({ message: "Questionnaire created successfully!" });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
  
