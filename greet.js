module.exports = function(models) {
    const showForm = function(req, res, next) {
      models.greetedNames.find({}, function(err, greets){
        if (err) {
return next(err)
        }

       res.render('greeted',{greets})
      })
    }

    // takes in a name, goes to database and looks for the name,
    // if not found create it than return it, if found just return it
    function takeName(name, fn) {

        models.greetedNames.findOne({
            name: name
        }, function(err, resul) {
            console.log(resul);
            if (err) {
                return next(err)
            } else if (resul) {
                fn(null, {
                  resul
                });
            } else {
                models.greetedNames.create({
                    name: name
                }, function(err, result) {
                    if (err) {
                        return next(err)
                    } else {
                        fn(null, {
                          result
                        });
                    }

                });
            }
        });
    }

    // you can use this on a different route to show all the names
    var allGreeted = function() {
        models.greetedNames.find({}, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                return result
            }
        });
    }

    // takes in a name and a Language and compiles a greeting
    function compileGreeting(name, lang, fn) {
        fn(null, {
          msg: lang + name
        });
    }

    // console.log(allGreeted());
    const greetNames = function(req, res, next) {
        var Language = req.body.Language;
        var name = req.body.name;
        takeName(name, function(err, result) {
          if (err) {
            return next(err)
          } else {
            console.log(result);
          }
        });

        // calling the compiler function, it renders the view
        compileGreeting(name, Language, function(err, result) {
          var msge = result.msg;
            if (err) {
                console.log(err);
            } else {
                res.render('greeting', {
                    languageGreet: msge
                });
            }
        });

    };
    return {
        showForm,
        greetNames,
        allGreeted
    };
}



//   if (Language === "English") {
//                  languageGreet = 'Hello, ' + name;
//              } else if (Language === "IsiXhosa") {
//                  languageGreet = 'Molo, ' + name;
//              } else if (Language === "Afrikaans") {
//                  languageGreet = 'Halo, ' + name;
//              }
// }







// var Language = req.body.Language;
// var languageGreet = "";
// models.greetedNames.findOne({
//         name: req.body.name
//     }, function(err, results) {
//         if (err) {
//             return next(err);
//         } else if (results) {
//
//             if (Language === "English") {
//                 languageGreet = 'Hello, ' + name;
//             } else if (Language === "IsiXhosa") {
//                 languageGreet = 'Molo, ' + name;
//             } else if (Language === "Afrikaans") {
//                 languageGreet = 'Halo, ' + name;
//             }
//             res.render('greeting', {
//                 name: languageGreet
//             });
//         }
//
//     console.log(languageGreet);
//      console.log(name);
// });
