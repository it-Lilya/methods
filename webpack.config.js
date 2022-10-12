// eslint-disable-next-line no-undef, no-unused-vars
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
    entry: './src/index.js',
    output: {
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    }
}
