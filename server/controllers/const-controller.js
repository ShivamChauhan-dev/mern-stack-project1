const Contact = require("../models/contect-model");


const contactForm = async (req, res) => {
    try {
        const responce = req.body;
        await Contact.create(responce);
        return res.status(200).json({ message: "message sent successfully"});
    } catch (error) {
        return res.status(200).json({ message: "message not delivered"});
    }
};

module.exports = contactForm;