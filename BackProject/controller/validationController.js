const User = require("../model/citizen")

const sendmail = require("sendmail")();



const validate = (req,res)=>{
    res.json({
        message : 'valation'
    })
}
const add = (req,res)=>{
    user = new User({
        code : req.query.code
    })
    user.save()
    res.json({
        "user" : user
    })
}
 const  verification =  (req,res)=>{
    cin = req.body.cin
    if (cin ===""){
        return res.status(400).json('null code ');
    }else{
     User.findOne({cin : cin })
    .then(user => { 
        if(user){
            return res.status(200).json(user);

        
        }else{
            return res.status(400).json('ce code n est pas valide ');
        }
        
      })

}
}
const fixe =  (req,res)=>{
    
    code = req.body.code  
    vaccine =  req.body.vaccine
    date =  req.body.date
    if (code == ""){
        return res.status(400).json('null code ');
    }
    else{
        const query = { code: code };
        User.findOne(query)
        .then(user => {
            console.log(user) 
            if(user){ 
                let email=user.email         
                console.log(user)  
                //verification 1er dose
                if(user.dose1 == false){
                    console.log("dose1")
                    if(user.covid == false ){
                        User.updateOne(query,{dose1 : "true", vaccine1 : vaccine , dateDose1 : date},function(err, res){
                            if(err){
                                throw err
                            }
                        })
                        sendmail(
                            {
                              from: "evax@test.com",
                              to: `${email}`,
                              subject: "Validation vaccin",
                              html: `vous avez pris  la 1 er dose du vaccin`,
                            },
                            function (err, reply) {
                              /*console.log(err && err.stack);
                            console.dir(reply);*/
                              res.json({
                                  message: "mail sended successfully ",
                                });
                              }
                            );
                          
                    }
                    else{
                        User.updateOne(query,{dose1 : "true", vaccine1 : vaccine , dateDose1 : date, vaccinated :"true"},function(err, res){
                            if(err){
                                throw err
                            }
                        })
                    }
                    sendmail(
                        {
                          from: "evax@test.com",
                          to: `${email}`,
                          subject: "Validation vaccin",
                          html: `vous avez pris  la 1 er dose du vaccin`,
                        },
                        function (err, reply) {
                          /*console.log(err && err.stack);
                        console.dir(reply);*/
                          res.json({
                              message: "mail sended successfully ",
                            });
                          }
                        );
                    res.json({
                        "msg":"1er dose validée"
                    })
                }else{ //verification 2eme dose
                    if(user.vaccinated== false){
                        User.updateOne(query,{dose2 : "true", vaccine2 : vaccine , dateDose2 : date, vaccinated :"true"},function(err, res){
                            if(err){
                                throw err
                            }
                        })
                    }
                    sendmail(
                        {
                          from: "evax@test.com",
                          to: `${email}`,
                          subject: "Validation vaccin",
                          html: `vous avez pris  la 2 eme dose du vaccin`,
                        },
                        function (err, reply) {
                          /*console.log(err && err.stack);
                        console.dir(reply);*/
                         
                          }
                        );
                    res.json({
                        "msg":"2eme dose validée"
                    })
                }
                
            }
            else{
                return res.status(400).json('ce code n est pas valide ');
            }
        })
    }
       
    }

const mobile =  async (req,res)=>{
    cin = req.body.cin
    vaccine =  req.body.vaccine
    date =  req.body.date
    email=req.body.email
    if (cin != ""){
        const query = { cin: cin };
        await  User.findOne(query)
        .then(user => { 
            if(user !=null)
            {
                return res.status(400).json('citoyen déjà inscrit');
            }
            
            
            else{
                citizen = new User(req.body)
                citizen.save()
                sendmail(
                    {
                      from: "evax@test.com",
                      to: `${email}`,
                      subject: "Inscription Evax ",
                      html:"vous etes bien inscrit",
                    },
                    function (err, reply) {
                      /*console.log(err && err.stack);
                    console.dir(reply);*/
                     
                    }
                  );
                  res.json({
                    message: "mail sended successfully ",
                  });
                
            }}
        
        )
    }
    else{
        return res.status(400).json('cin doit etre non null');

    }
}

module.exports = { validate, verification,add,fixe ,mobile}

