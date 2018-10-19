const _ = require('lodash');
const express = require('express');

async function verifyUser(data) {
    const username = _.get(data, 'username'); // 從 data 取出 username
    const password = _.get(data, 'password'); // 從 data 取出 username

    if(username === 'billy' && password === '1234') { // pass
        return Promise.resolve({
            username,
            email: 'billy@gmail.com',
        });
    }
    return Promise.reject(new Error('Fail'));
}

/**
 * 
 * @param {object} dependencies
 */
function createRouter(dependencies) {
    // Get dependencies
    const { } = dependencies;

    // Create a router
    var router = express.Router();

    /* POST log */
    router.post('/login', function (req, res, next) {
        next(new Error('Not implement'));
    });
    return router;
}

module.exports = {
    createRouter
};
