const orderService = require('../services/order.service')
const userService = require("../services/user.service")
const createOrder = async (req, res) => {
    const jwt = req.headers.authorization
    console.log(jwt)
    console.log(req.body.addressData, "bodyyyyyyyyyyy")
    let user;
    try {
        user = await userService.getUserProfileByToken(jwt);
        try {
            const createdOrder = await orderService.createOrder(user, req.body.addressData)
            return res.status(201).send(createdOrder)
        } catch (error) {
            console.log(error)
            return res.status(500).send({ error: error.message })
        }
    } catch (error) {
        console.error(error)
        res.status(404).send("User not found")
    }

}

const findOrderById = async (req, res) => {
    const user = req.user;
    try {
        const createdOrder = await orderService.findOrderById(user, req.body)
        return res.status(201).send(createdOrder)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

const orderHistory = async (req, res) => {
    const user = req.user;
    try {
        const createdOrder = await orderService.usersOrderHistory(user._id)
        return res.status(201).send(createdOrder)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

const getAllOrders = async (req, res) => {
    const user = req.user;
    try {
        const Orders = await orderService.getAllOrders()
        return res.status(201).send(Orders)
    } catch (error) {
        console.log(error.message, "../././././a.df/a.df/.")
        return res.status(500).send({ error: error.message })
    }
}

module.exports = { createOrder, orderHistory, findOrderById, getAllOrders }