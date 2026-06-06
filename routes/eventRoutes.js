const express = require("express");
const router = express.Router();

const eventController = require("../controllers/eventController");
const upload = require("../middleware/upload");

router.get("/viewEvent", eventController.viewEvents);

router.get("/addEvent", eventController.addEventPage);
router.post(
    "/addEvent",
    upload.single("image"),
    eventController.createEvent
);

router.get(
    "/editEvent/:id",
    eventController.editEventPage
);

router.post(
    "/updateEvent/:id",
    upload.single("image"),
    eventController.updateEvent
);

router.get(
    "/deleteEvent/:id",
    eventController.deleteEvent
);

module.exports = router;