const User = require("../model/validator")
const bcrypt = require('bcrypt')

register = (req,res)=>{
    password = req.body.pwd
    login=req.body.login
    if(!login || !password ){
        return res.status(400).json('Mot de passe et login doivent etre non vides');

    }
    else{
    bcrypt.hash(password,10,function(err,hash){
        if (err){
            return res.status(400).json(err);
        }
        let user = new User ({
            login : login,
            password : hash
        })            
        user.save()
        .then (user =>{
            return res.status(200).json('Validator Added Successfully!');

        })
        .catch(error =>{
            return res.status(400).json('An error occured!');
        })
    })
}

}

connect=  (req,res)=>{
    login=req.body.login
    pwd = req.body.pwd
    if( !pwd ||  !login){
        return res.status(400).json('login et password doivent pas etre vides  ');

    }else{
        User.findOne({login : login})
        .then( (user)=>{
            if(user){
                bcrypt.compare(pwd,user.password,function(err,result){
                    if(err){
                        return res.status(400).json("erreur 400");

                    }
                    if(result){
                        return res.status(200).json('vous etes connecté  ');

                    }
                    else{
                        return res.status(400).json('mot de passe incorrecte');

                    }
                })}
            else
                { 
                    return res.status(400).json('verifiez vos cordonnées');
                }

    })
}
}

module.exports = { connect,register}
