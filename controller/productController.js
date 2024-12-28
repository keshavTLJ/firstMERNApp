const { Product } = require("../model/productModel");

async function getAllProducts(req, res) {
  const allProducts = await Product.find();

  res.status(200).json(allProducts);
}

async function getProduct(req, res) {
  const id = req.params.id;
  const product = await Product.findById(id)
  product ? res.status(200).json(product) : res.status(404).json(product);
}

async function createProduct(req, res) {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err);
    }
}

// function replaceProduct(req, res) {
//   const id = req.params.id;

//   const uptadedProducts = products.map((p) => {
//     if (p.id === id) return req.body;
//     return p;
//   });

//   res.json(uptadedProducts);
//   // products.splice(id-1, 1, req.body);
//   // res.json(products);
// }

async function updateProduct(req, res) {
  const id = req.params.id;

  await Product.findOneAndUpdate({ _id: id }, req.body, { new : true })
                .then(updatedProduct => res.status(200).json(updatedProduct))
                .catch(err => {
                    console.log(err);
                    res.json(err);
                });

}

async function deleteProduct(req, res) {
  const id = req.params.id;

  Product.findByIdAndDelete(id)
         .then(deletedProduct => res.status(200).json(deletedProduct))
         .catch(err => {
            console.log(err);
            res.json(err);
        });
}

module.exports = {
  getAllProducts,
  getProduct,
  createProduct,
//   replaceProduct,
  updateProduct,
  deleteProduct,
};
