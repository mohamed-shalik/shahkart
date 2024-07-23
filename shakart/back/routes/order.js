const router = require("express").Router();
const Order = require("../models/order");

router.post("/", async (req, res) => {
    try {
        // Extract data from the request body
        const { name, street, city,proname, phoneno } = req.body;

        // Validate the data (if needed)

        // Create a new order
        const order = new Order({ name, street, city,proname, phoneno });

        // Save the order to the database
        await order.save();

        // Send a success response
        res.status(201).send({ message: "Order created successfully" });
    } catch (error) {
        // Handle errors
        console.error("Error creating order:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;
