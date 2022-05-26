const express = require('express');
const cors = require('cors');
const app = express();
const productsController = require('./controllers/products-controller');
const usersController = require('./controllers/users-controller');
const categoriesController = require('./controllers/categories-controller');
const loginFilter = require('./middleware/login-filter');

// The following lines register middleware functions (server.user())

app.use(cors({origin: ["http://localhost:4200"]}));

app.use(loginFilter());
// Extract the JSON from the body and create request.body object containing it:
app.use(express.json());

// Every http request which starts with /vacations will be dealt inside "vacationsController"
app.use("/products", productsController);
app.use("/users", usersController);
app.use("/categories", categoriesController);

// The following line launches the node server, on port 3001
app.listen(3001, () => console.log("Listening on http://localhost:3001"));