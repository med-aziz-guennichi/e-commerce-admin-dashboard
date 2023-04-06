import Product from "../model/productModel.js"


//Controller for create Product
export const createProduct = async (req, res) => {
    const newProduct = new Product(req.body);

    try {

        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);

    } catch (error) {
        res.status(500).json(error);
    }
}

//Controller for get all Products
export const getAllProduct = async (req, res) => {
    const products = await Product.find();

    res.send(products);
}

//Controller for get one Product
export const getProduct = async (req, res) => {
    const product = await Product.findOne({_id: req.params.id});
    if(product) {
        res.send(product);
    } else {
        res.status(404).json("Product not found!");
    }
    
}

//Controller for count Products
export const countProducts = async(req, res) => {
    try {
        const countAllProducts = await Product.countDocuments();
        res.status(200).json({count: countAllProducts});
    } catch(error) {
        return res.status(500).json(error);
    }
}

//Controller for update Product info
export const updateProduct = async (req, res) => {
    const product = await Product.findById(req.body._id);
    //if user exists
    if (product) {
        
        product.name = req.body.name || product.name;
        product.category = req.body.category || product.category;
        product.price = req.body.price || product.price;
        product.star = req.body.star || product.star;
        product.description = req.body.description || product.description;

        const updatedProduct = await product.save();

        res.send({
            _id: updatedProduct._id,
            name: updatedProduct.name,
            category: updatedProduct.category,
            price: updatedProduct.price,
            star: updatedProduct.star,
            description: updatedProduct.description,
        });
    } else {
        res.status(401).send({ message: 'Product not Found!' });
    }
}

//Controller for update Product images
export const updateImages = async(req, res) => {
    if(req.body.productId === req.params.id) {
        try {
            await Product.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            });
            res.status(200).json("Images has been updated");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("Error!");
    }
}