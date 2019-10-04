const mysql = require("mysql");
const inquirer = require("inquirer")

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
            console.log(res[i].item_id, res[i].product_name, res[i].department_name, res[i].price);
        }
    })

}

const shop = () => {
    inquirer
        .prompt([{
            message: "Enter the ID of the item you would like to buy. Format is ID Product Department Price Stock",
            type: "input",
            name: "id"
        }]).then (function(answer){
            connection.query("")
        })
}

connection.connect(function (err) {
    if (err) throw err;
    showInventory();
    shop()
    connection.end();
});