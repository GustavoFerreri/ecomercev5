const db = require('./../services/db');

const list = async () =>
    await db(process.env.T_PRODUCT)
    .select('id', 'title', 'img', 'description')

module.exports = { 
    list 
};