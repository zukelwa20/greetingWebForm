module.exports = function(){

  const greetNames = function(req, res){
    var Language = req.body.Language;
    var name = req.body.name;
var languageGreet = "";

if (Language === "English") {
  languageGreet = 'Hello, ' + name;
}
else if(Language === "IsiXhosa"){
  languageGreet = 'Molo, ' + name;
}
else if(Language === "Afrikaans"){
  languageGreet = 'Halo, ' + name;
}
  res.render('greeting',{
    name : languageGreet
  });
  console.log(languageGreet);
  console.log(name);

}

return {
  greetNames
}
}
