module.exports = app => {

    // 引入express
    const express = require('express')

    // 引入路由
    const router = express.Router()

    // 引入模型
    const Category = require('../../models/category')

    // 添加分类接口
    // 使用post方式提交数据
    router.post('/categories', async (req, res) => {
        // 通过创建的模型的表来创建数据
        const model = await Category.create(req.body)
        // 发送给客户端
        res.send(model)
    })


    // 分类列表接口
    router.get('/categories', async (req, res) => {
        const items = await Category.find().limit(10)
        res.send(items)
    })











    app.use('/admin/api', router)
}