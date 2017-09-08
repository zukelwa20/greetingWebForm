const mongoose = require('mongoose');
module.exports = function(mongoUrl) {
    mongoose.connect(mongoUrl, function() {

    });


    var greetedNames = mongoose.model('greetedNames', {
        name: String,
        counter: Number
    });


    return {
        greetedNames
    }
}
