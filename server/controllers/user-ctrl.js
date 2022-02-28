const bcrypt = require('bcryptjs')
const User = require('../models/user-model')

const checkUser = async (req, res) => {
    const body = req.body
    const users = await User.find({})
    for(let i = 0; i < users.length; i++) {
        if (users[i].username === body.username) {
            const match = await bcrypt.compare(body.password, users[i].password)
            if (match){
                return res.status(200).json({
                    success: true,
                    id: users[i]._id,
                    name: users[i].name,
                })
            }
        }
    }
    return res.json({success: false, message: 'Username or password incorrect'})
}
module.exports = {
    checkUser
}