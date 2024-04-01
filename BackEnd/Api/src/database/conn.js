const mongoose = require('mongoose');

async function main() {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect
        ('mongodb+srv://Sebastiao-Cosme:l5qGBQe72sWL6cwr@homeschooling.5haeaab.mongodb.net/?retryWrites=true&w=majority');
        console.log('Conectado no banco');
    } catch (error) {
        console.log('error')
    }
}

module.exports = main