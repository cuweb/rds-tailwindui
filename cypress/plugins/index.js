/// <reference types="cypress" />

require('dotenv').config()

module.exports = (on, config) => {
    config.env.baseUrl = 'http://localhost:6006'
    return config
}
