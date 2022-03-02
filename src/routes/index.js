const siteRouter = require('./site')
const userRouter = require('./user')
const quanlinhaplieuRouter = require('./quanlinhaplieu')
const quanlitaikhoanRouter = require('./quanlitaikhoan')
const baocaoRouter = require('./baocao')
const thongkeRouter = require('./thongke')

function route(app) {

    app.use('/thongke', thongkeRouter)
    app.use('/baocao', baocaoRouter)
    app.use('/quanlitaikhoan', quanlitaikhoanRouter)
    app.use('/quanlinhaplieu', quanlinhaplieuRouter)
    app.use('/site', siteRouter)
    app.use('/', userRouter)
}

module.exports = route