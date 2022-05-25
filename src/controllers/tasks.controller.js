const db = require('./../services/db');

const list = async (params = {}) =>
    await db(process.env.T_PRODUCT)
    .where(params)
    .select('id', 'title', 'img', 'description');

const create = (obj) => 
    db(process.env.T_PRODUCT)
    .insert(obj);

const update = (params, obj) => 
    db(process.env.T_PRODUCT)
    .where(params)
    .update(obj);

const destroy = (params, obj) => 
    db(process.env.T_PRODUCT)
    .where(params)
    .del();

module.exports = { 
    list,
    create,
    update,
    destroy
};