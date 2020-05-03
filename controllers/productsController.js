const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let controller = {
	index: function (req, res) {
		let producto = products.find(function (element) {
			return element.id == req.params.id
		});
		res.render('detail', {
			title: 'Mercado Liebre /' + producto.name,
			productos: producto,
			aMiles: toThousand
		}
		)
	},// Create - Form to create
	create: (req, res) => {
		// Do the magic
		res.render('product-create-form')
	},

	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: function (req, res) {
		let productoEdit = products.find(function (element) {
			return element.id == req.params.id
		});
		res.render('product-edit-form', {
			title: 'Mercado Liebre /' + productoEdit.name,
			productoEdit: productoEdit,
			aMiles: toThousand,
		}
		)
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		let buscoProducto = products.find(function (element) {
			return element.id == req.params.id
		});

		let productosEditados = [];

		products.forEach(element=>{
			if(element.id == req.params.id){
				element.name = req.body.name
				element.price = req.body.price
				element.discount = req.body.discount
				element.category = req.body.category
				element.description = req.body.description
			}
		})
		let productosEditadosJSON = JSON.stringify(products);
		fs.writeFileSync(productsFilePath,productosEditadosJSON)
		res.redirect('/product/ok')
	},
	//MODIFICACION OK
	modificado:(req,res)=>{
		res.render('modificado')
	},
	// Delete - Delete one product from DB
	delete: (req, res) => {
		res.render('index')
	}
}

module.exports = controller;