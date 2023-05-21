const Product = require('../../../models/products');

// Get All Products from the Database
module.exports.getProducts = async function(req, res){
    try {
        let products = await Product.find({}).select('name quantity');

        return res.json(200, {
            data: {products}
        });
    } catch (error) {
        console.log("Error Encountered:", error);
        return res.json(500, {
            message: "Internal Server Error"
        })
    }
}

// Create Product in the Database
module.exports.createProduct = async function(req, res){
    try {
        let product = await Product.create(req.body);

        return res.json(200, {
            data: {product}
        });
    } catch (error) {
        console.log("Error Encountered:", error);
        return res.json(500, {
            message: "Internal Server Error"
        })
    }
}

// Delete a product from the Database
module.exports.deleteProduct = async function(req, res){
    try {
        let deleteProduct = await Product.findByIdAndDelete(req.params.id);

        if(deleteProduct){
            return res.json(200, {
                data: {message: "Product Deleted!"}
            });
        } else {
            return res.json(404, {
                data: {message: "Product not found or Already Deleted!"}
            });
        }
    } catch (error) {
        console.log("Error Encountered:", error);
        return res.json(500, {
            message: "Internal Server Error"
        })
    }
}

// Update a product in the Database
module.exports.updateQuantity = async function(req, res){
    try {
        let product = await Product.findById(req.params.id).select('name quantity');

        if(product){
            product.quantity = req.query.quantity;
            product.save();
    
            return res.json(200, {
                data: {product, message: "Updated Successfully!"}
            });
        } else {
            return res.json(404, {
                data: {message: "Product not found!"}
            });
        }
    } catch (error) {
        console.log("Error Encountered:", error);
        return res.json(500, {
            message: "Internal Server Error"
        })
    }
}