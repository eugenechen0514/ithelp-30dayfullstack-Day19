const express = require('express');

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
