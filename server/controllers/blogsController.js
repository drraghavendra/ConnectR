const db = require('../models')

// 1. create blog

const addBlog = async (req, res) => {
    let info = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        
    }

    const blog = await Blog.create(info)
    res.status(200).send(blog)
    console.log(blog)

}

// 2. get all blogs

const getAllBlogs = async (req, res) => {
    let blogs = await Blog.findAll({})
    res.status(200).send(blogs)

}

// 3. get single blog

const getBlogByTitle = async (req, res) => {

    let blog = await Blog.findByPk(req.params.id)
    res.status(200).send(blog)

}

// 4. update Product

const updateProduct = async (req, res) => {

    let id = req.params.id

    const product = await Product.update(req.body, { where: { id: id }})

    res.status(200).send(product)
   

}

// 5. delete product by id

const deleteProduct = async (req, res) => {

    let id = req.params.id
    
    await Product.destroy({ where: { id: id }} )

    res.status(200).send('Product is deleted !')

}

// 6. get published product

const getPublishedProduct = async (req, res) => {

    const products =  await Product.findAll({ where: { published: true }})

    res.status(200).send(products)

}

// 7. connect one to many relation Product and Reviews

const getProductReviews =  async (req, res) => {

    const id = req.params.id

    const data = await Product.findOne({
        include: [{
            model: Review,
            as: 'review'
        }],
        where: { id: id }
    })

    res.status(200).send(data)

}








module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct,
    getProductReviews,
    upload
    
}