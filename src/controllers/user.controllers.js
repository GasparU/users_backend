const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const users = await User.findAll()
    return res.json(users)
});

const create = catchError(async (req, res) => {
    const user = req.body
    console.log(user)
    const createCar = await User.create(user)
    return res.status(201).json(createCar)
});

const remove = catchError(async (req, res) => {
    const {id} = req.params
    const removeUser = await User.destroy({where: { id}})
    if(!removeUser) return res.status(404).json({statusbar: 'error', message: 'User not found'})
    return res.sendStatus(204)
});

const update = catchError(async(req, res) => {
    const user = req.body
    const { id } = req.params;
    const userUpdate = await User.update(user, {where: {id},returning: true} );
    if(userUpdate[0] == 0) return res.status(404).json({message: 'User not found'})
    return res.json(userUpdate[1][0]);
});

const getOne = catchError(async (req, res) => {
    const {id} = req.params
    const userOne = await User.findByPk(id)
    if(!userOne) return res.status(404).json({statusbar: 'error', message: 'User not found'})
    return res.json(userOne)
}
)

module.exports = {
    getAll,
    create,
    remove,
    update,
    getOne
}