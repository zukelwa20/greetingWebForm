module.exports = function(models) {
    const showForm = function(req, res, next) {
        res.redirect('/')
    }

    // takes in a name, goes to database and looks for the name,
    // if not found create it than return it, if found just return it
    function takeName(name, fn) {

        models.greetedNames.findOne({
            name: name

        }, function(err, greetedPerson) {
            //console.log greetedPerson);
            if (err) {
                return next(err)
            } else if  (greetedPerson) {

              greetedPerson.counter += 1;
              greetedPerson.save(fn);

            } else {
                models.greetedNames.create({
                    name: name,
                    counter: 1
                }, fn);
            }

        });
    }

    var counting = function(msg, res) {
        models.greetedNames.count({}, function(err, latestCounter) {
            if (err) {

            } else {
                res.render('greeting', {
                    languageGreet: msg,
                    counter: latestCounter
                })
            }
        })

    };
    //  using "allGreeted" on different route to show all the names
    var allGreeted = function(name, res) {
        models.greetedNames.find({}, function(err, greets) {
            if (err) {
                console.log(err);
            } else if (greets) {
                res.render('greeted', {
                    greets
                })
            } else {
                console.log(result);
                return result
            }
        })
    };


    // takes in a name and a Language and compiles a greeting
    function compileGreeting(name, lang) {
        //fn(null, {
        return lang + name
        //});
    }

    // console.log(allGreeted());
    const greetNames = function(req, res, next) {
        var Language = req.body.Language;
        var name = req.body.name;
        var arr = [];
        takeName(name, function(err, result) {
            if (err) {
                return next(err)
            } else {
                //return result;

                // calling the compiler function, it renders the view
                var msg = compileGreeting(name, Language);
                counting(msg, res);

                // , function(err, result) {
                //     var msge = result.msg;
                //     if (err) {
                //         console.log(err);
                //     } else {
                //     }
                // });

            }
        });



    };
    var resetFun = function(req, res) {
        models.greetedNames.remove({}, function(err, result) {
            if (err) {
                throw (err)
            } else {
                // res.redirect('/greeted')
                return result
            }
        })
    }

    return {
        showForm,
        greetNames,
        allGreeted,
        resetFun

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




// // var counter = 1;
// var counting = function(msg, res) {
//   models.greetedNames.count({}, function(err, result) {
//     if (err) {
//       console.log(err);
//     } else   {
//       res.render('greeting', {
//         languageGreet: msg,
//         counter: result+=1
//       });
//     // } else {
//     //   // res.render('greeting', {
//     //   //   languageGreet: msg,
//     //   //   counter: result+=1
//     //   // });
//     // }
//   })
// };




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
