const db = require('../models')

const addUser = async (req, res) => {
        let info = {
                Name: req.body.Name,
                Email: req.body.Email,
                MetaMaskID: req.body.MetaMaskID,
        }

        const user = await User.create(info)
        res.status(200).send(user)
        console.log(user)
}

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

    const getAllBlogs = async (req, res) => {
        let blogs = await Blog.findAll({})
        res.status(200).send(blogs)
    
    }

    const getBlogByTitle = async (req, res) => {
        let blog = await Blog.findByPk(req.params.id)
        res.status(200).send(blog)
    }

    

