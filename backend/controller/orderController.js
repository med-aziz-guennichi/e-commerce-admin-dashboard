import Order from "../model/orderModel.js";


//Controller for Create Orders
export const order = async (req, res) => {
    const newOrder = new Order(req.body);

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
}

//Controller for get User Orders
export const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
}

//Controller for get My Order
export const getMyOrder = async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
        res.send(order);
    } else {
        res.status(404).send({ message: 'Order Not Found' });
    }
}

//Controller for Get all Orders
export const getAllOrders = async (req, res) => {
    const orders = await Order.find();

    res.send(orders);
}

//Controller for Total Sum
export const getAllSum = async (req, res) => {
    
    try {
        const totalSum = await Order.aggregate([
            {
                $group: {
                    _id: null,
                    count: {$sum: '$total'}
                }
            }
        ]);
        res.send(totalSum);
    } catch(error) {
        res.send(error)
    }
}
