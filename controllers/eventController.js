const Event = require("../models/Event");

// View All Events
exports.viewEvents = async (req, res) => {
    try {
        const events = await Event.find().sort({ createdAt: -1 });

        res.render("viewEvent", {
            events
        });

    } catch (error) {
        console.log(error);
        res.redirect("/");
    }
};

// Add Event Page
exports.addEventPage = (req, res) => {
    res.render("addEvent");
};

// Create Event
exports.createEvent = async (req, res) => {
    try {
        const {
            title,
            description,
            eventDate,
            eventTime,
            location,
            price
        } = req.body;
        await Event.create({
            title,
            description,
            eventDate,
            eventTime,
            location,
            price,
            image: req.file ? req.file.filename : ""
        });

        res.redirect("/viewEvent");

    } catch (error) {
        console.log(error);
        res.redirect("/addEvent");
    }
};

exports.editEventPage = async (req, res) => {
    try {

        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.redirect("/viewEvent");
        }

        res.render("editEvent", {
            event
        });

    } catch (error) {
        console.log(error);
        res.redirect("/viewEvent");
    }
};

// Update Event
exports.updateEvent = async (req, res) => {
    try {

        const {
            title,
            description,
            eventDate,
            eventTime,
            location,
            price
        } = req.body;

        const updatedData = {
            title,
            description,
            eventDate,
            eventTime,
            location,
            price
        };

        if (req.file) {
            updatedData.image = req.file.filename;
        }

        await Event.findByIdAndUpdate(
            req.params.id,
            updatedData,
            { new: true }
        );

        res.redirect("/viewEvent");

    } catch (error) {
        console.log(error);
        res.redirect("/viewEvent");
    }
};

// Delete Event
exports.deleteEvent = async (req, res) => {
    try {

        await Event.findByIdAndDelete(req.params.id);

        res.redirect("/viewEvent");

    } catch (error) {
        console.log(error);
        res.redirect("/viewEvent");
    }
};