const productsDal = require('../dal/products-dal');

async function getAllProducts(){
    let products = await productsDal.getAllProducts();
    return products;
}

async function getAllProductsByCategory(categoryId) {
    let products = await productsDal.getAllProductsByCategory(categoryId);
    return products;
}

async function addNewProduct(product) {
    let id = await productsDal.addNewProduct(product);
    product.id = id;
    return id;
};

async function deleteProduct(productId) {
    await productsDal.deleteProduct(productId);
 };

module.exports = {
    getAllProducts,
    getAllProductsByCategory,
    addNewProduct,
    deleteProduct
}