const mongoose = require('mongoose');
module.exports = function(mongoUrl) {
    mongoose.connect(mongoUrl, function() {
      // console.log('F****');
    });


    var greetedNames = mongoose.model('greetedNames', {
        name: String,
        counter: Number
    });


    return {
        greetedNames
    }
}
// var Names = new greetedNames({ name: '' });
// Names.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//
//     console.log(Names);
//   }
//}
