let connection = require("./connection-wrapper");

async function getAllProducts() {
    let sql = `SELECT p.id, p.name, p.category_id as categoryId, p.price, p.img_url as imgUrl, c.name as categoryName 
    FROM products p join categories c
    ON c.id = p.category_id`;

    let products = await connection.execute(sql);

    return products;
}

async function getAllProductsByCategory(categoryId) {
    let sql = `SELECT p.id, p.name, p.price, p.img_url as imgUrl, p.category_id as categoryId, c.name as categoryName 
    FROM products p join categories c 
    on p.category_id = c.id 
    where c.id = ?`;
    parameters = [categoryId]

    let products = await connection.executeWithParameters(sql, parameters);

    return products;
}

async function addNewProduct(product) {
    let sql = "INSERT INTO products (name, category_id, price, img_url)  values(?,?, ?, ?)";
    let parameters = [product.name, product.categoryId, product.price, product.imgUrl];

    let productData = await connection.executeWithParameters(sql, parameters);

    return productData.insertId;

}

async function deleteProduct(productId) {
    let sql = 'DELETE FROM products WHERE id = ?;';
    let parameters = [productId];

    await connection.executeWithParameters(sql, parameters);
}




module.exports = {
    getAllProducts,
    addNewProduct,
    deleteProduct,
    getAllProductsByCategory
}