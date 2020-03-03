// 服务端的入口文件
const express = require('express')
const cors = require('cors')

const app = express()

// 解决跨域的中间件
app.use(cors())

// post数据获取的解决方法
app.use(express.json())

require('./plugins/db')(app)
require('./routes/admin')(app)


app.listen(3000, () => {
    console.log("http://localhost:3000")
})
