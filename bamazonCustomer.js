const mysql = require("mysql");
const inquirer = require("inquirer")
const stock = [];

const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon"
});

const showInventory = () => {
    console.log("Welcome to Bamazon! Here's our inventory as of now.");
    connection.query("SELECT * FROM products;", function (err, res) {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
            stock.push(res[i].stock_quantity)
            console.log(res[i].item_id, res[i].product_name, res[i].department_name, res[i].price);
        }
    })
}

const shop = () => {
    inquirer
        .prompt([{
            message: "Enter the ID of the item you would like to buy. Format is ID Product Department Price\n",
            type: "input",
            name: "id"
        }]).then(function (answer) {
            connection.query(`SELECT stock_quantity from PRODUCTS WHERE item_id=${answer.id}`, function (err, res) {
                if (err) throw err;
                if (res[0].stock_quantity < 1) {
                    ("Sorry, seems like we're fresh out right now!")
                } else {
                    connection.query(`UPDATE products SET stock_quantity=stock_quantity-1 WHERE item_id=${answer.id};`)
                    console.log("Sold, to the weird guy sitting at his computer!")
                }
                connection.end();
            })
            
        })
}


connection.connect(function (err) {
    if (err) throw err;
    showInventory();
    shop();
});