const db = require('./../services/db');

const list = async (params = {}) =>
    await db(process.env.T_PRODUCT)
    .where(params)
    .select('id', 'title', 'img', 'description')

const create = (obj) => 
    db(process.env.T_PRODUCT)
    .insert(obj)

module.exports = { 
    list,
    create
};