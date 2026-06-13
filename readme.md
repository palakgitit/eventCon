# Event Management System

## Overview

The Event Management System is a web application developed using Node.js, Express.js, MongoDB, EJS, and Multer. It allows users to manage events by performing Create, Read, Update, and Delete (CRUD) operations. Users can also upload event banner images, which are stored on the server using Multer.

---


## Screenshots:


![img-1](<Screenshot 2026-06-13 140410.png>)

 ![img-2](<Screenshot 2026-06-13 140438.png>) 
 
 ![img-3](<Screenshot 2026-06-13 140428.png>)


## VIVA LINK 

[EVENT SYSTEM](https://drive.google.com/file/d/1EzvVNaX_c7IDbRoFMM7WsXnAYv-1aVMJ/view?usp=drive_link)

## Features

- Add new events
- View all events
- Edit existing events
- Delete events
- Upload event banner images
- Store event data in MongoDB
- Dynamic page rendering using EJS

---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Multer
- Bootstrap

---

## Project Structure

```text
project/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── eventController.js
│
├── middleware/
│   └── upload.js
│
├── models/
│   └── Event.js
│
├── routes/
│   └── eventRoutes.js
│
├── uploads/
│
├── views/
│   ├── index.ejs
│   ├── addEvent.ejs
│   ├── editEvent.ejs
│   └── viewEvent.ejs
│
├── public/
│
├── app.js
├── package.json
└── README.md
```

---

## Database Schema

### Event Model

| Field | Type |
|---------|---------|
| title | String |
| description | String |
| eventDate | Date |
| eventTime | String |
| location | String |
| price | Number |
| image | String |

---

## CRUD Operations

### Create Event

Users can add a new event by providing:

- Event Title
- Event Date
- Event Time
- Location
- Price
- Description
- Event Banner Image

---

### Read Events

All events are fetched from MongoDB and displayed dynamically on the View Events page.

---

### Update Event

Users can edit existing event information and optionally upload a new banner image.

---

### Delete Event

Users can delete an event from the database. A confirmation message is displayed before deletion.

---

## Image Upload

Multer is used for handling image uploads.

Uploaded images are:

- Stored in the `uploads` folder
- Saved with unique filenames
- Displayed dynamically in event cards

---

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Required Packages

```bash
npm install express mongoose multer ejs
```

### 4. Configure MongoDB

Update your MongoDB connection string inside:

```text
config/db.js
```

---

### 5. Start the Server

```bash
node app.js
```

or

```bash
npm start
```

---

## Application Routes

| Method | Route | Description |
|----------|----------|----------|
| GET | / | Home Page |
| GET | /viewEvent | View All Events |
| GET | /addEvent | Add Event Page |
| POST | /addEvent | Create Event |
| GET | /editEvent/:id | Edit Event Page |
| POST | /updateEvent/:id | Update Event |
| GET | /deleteEvent/:id | Delete Event |

---

## Learning Outcomes

Through this project, the following concepts were implemented:

- Express Routing
- MongoDB Integration
- Mongoose Models
- CRUD Operations
- File Uploads using Multer
- Dynamic Rendering with EJS
- MVC Architecture
- Bootstrap-based UI Design

---

## Conclusion

The Event Management System provides a simple and efficient way to manage event information. It demonstrates full-stack web development concepts including database operations, image uploads, dynamic rendering, and CRUD functionality using Node.js, Express.js, MongoDB, EJS, and Multer.
