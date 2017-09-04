module.exports = function(models) {
    const showForm = function(req, res, next) {
      res.redirect('/')
    }

    // takes in a name, goes to database and looks for the name,
    // if not found create it than return it, if found just return it
    function takeName(name, fn) {

        models.greetedNames.findOne({
            name: name

        }, function(err, resul) {
            //console.log(resul);
            if (err) {
                return next(err)
            } else if (resul) {
                fn(null, {
                    resul
                });
            } else {
                models.greetedNames.create({
                    name: name,
                     counter : 0
                }, function(err, result) {
                    if (err) {
                        return (err)
                    } else {
                        // fn(null, {
                            result
                        // });
                    }

                });
            }
        });
    }

    var counting = function (msg, res) {
      models.greetedNames.count({}, function (err, result) {
        if (err) {

        }else {
          res.render('greeting', {result,
            languageGreet: msg,
            counter: result+=1
          })
        }
      })

    };
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

    // you can use this on a different route to show all the names
    var allGreeted = function(name, res) {
        models.greetedNames.find({}, function(err, greets) {
            if (err) {
                console.log(err);
            } else if (greets) {
                res.render('greeted', {greets})
             }
              else {
                console.log(result);
                  return result
                }
            })
        };


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
        var arr = [];
        takeName(name, function(err, result) {
            if (err) {
                return next(err)
            } else {
                return result;
            }
        });

        // calling the compiler function, it renders the view
        compileGreeting(name, Language, function(err, result) {
            var msge = result.msg;
            if (err) {
                console.log(err);
            } else {
              counting(msge, res);
            }
        });

    };
// var resetFun = function(req, res, next){
// models.greeNames.remove({}, function(err, result){
//   if(err){
//     throw (err)
//   }
//   else{
//     return res.render('/greeted')
//   }
// })
//   }

    return {
        showForm,
        greetNames,
        allGreeted,
        // resetFun
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
