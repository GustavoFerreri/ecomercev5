const db = reruire('./../services/db');

const list = () =>
    db(process.env.T_PRODUCT)
    .select('id', 'title', 'img', 'description')

module.exports = { 
    list 
};