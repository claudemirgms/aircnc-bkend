//index, show, store, update, destroy
const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { email } = req.body;
        let user = await User.findOne({email});
        if(!user){
            user = await User.create({ email });
        }
        return res.json(user);
    }
    
    //teste controller
    //store(req, res) {
    //    return res.json({message: 'Hello Word'})
    //}
};