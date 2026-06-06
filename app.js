const Event = require("./models/Event");
const express = require("express");
const path = require("path");

const connectDB = require("./config/db");

const app = express();

connectDB();


app.get("/", async (req, res) => {
    try {

        const events = await Event
            .find()
            .sort({ createdAt: -1 })
            .limit(4);

        res.render("index", {
            events
        });

    } catch (error) {

        console.log(error);

        res.render("index", {
            events: []
        });
    }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("uploads"));

const eventRoutes = require("./routes/eventRoutes");

app.use("/", eventRoutes);

app.get("/", (req, res) => {
    res.render("index");
});


app.get("/performer", (req, res) => {
    res.render("performer");
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log(
        `Server running on http://localhost:${PORT}`
    );
});