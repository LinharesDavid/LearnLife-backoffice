const express = require('express');

module.exports = server => {
    server.use(express.static('public'))
};