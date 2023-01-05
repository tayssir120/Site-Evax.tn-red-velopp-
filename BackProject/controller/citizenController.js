var nodemailer = require("nodemailer");
const sendmail = require("sendmail")();
const Citizen = require("../model/citizen");
let codeVerif = 0;
let code = "";
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
//send verification code EVAX login
const sendCodeLoginEvax = (req, res) => {
  code = req.body.code;
  var codeGenerate = getRandomInt(900000);
  if (code == "") {
    return res.status(400).json("null code");
  } else {
    Citizen.findOne({ code: code }).then((citizen) => {
      if (citizen) {
        sendmail(
          {
            from: "evax@test.com",
            to: `${citizen.email}`,
            subject: "code de vérification",
            html:
              "<p> Bonjour, </p> <br/> <p>voila votre code de vérification : " +
              `${codeGenerate}` +
              "</p>",
          },
          function (err, reply) {
            console.log(err && err.stack);
            console.dir(reply);
          }
        );
        return res.status(200).json("le code a été envoyé avec succés ");
      } else {
        return res.status(400).json("mail couldn't be empty");
      }
    });
  }
};

let RightCode = 0;
let email = "";

//send verification code
const sendCode = (req, res) => {
  email = req.body.email;
  if (email != "") {
    function generateCode(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    RightCode = generateCode(100000, 999999);
    sendmail(
      {
        from: "evax@test.com",
        to: `${email}`,
        subject: "Code de vérification ",
        html: `${RightCode}`,
      },
      function (err, reply) {
        /*console.log(err && err.stack);
      console.dir(reply);*/
        res.json({
          message: "mail sended successfully " + `${RightCode}`,
        });
      }
    );
  } else {
    return res.status(400).json("null email");
  }
};

//verif code
const verifCode = (req, res) => {
  var InputedCode = req.body.InputedCode;
  if (InputedCode == RightCode) {
    return res.status(200).json("Right code");
  } else {
    return res.status(400).json("Error code");
  }
};

//add citizen with cin
const addCin = (req, res, next) => {
  let citizen = new Citizen({
    email: email,
    cin: req.body.cin,
    dateOfBirth: req.body.dateOfBirth,
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    gender: req.body.gender,
    vaccinationGovernorate: req.body.vaccinationGovernorate,
    vaccinationDelegation: req.body.vaccinationDelegation,
    infectedWithCovid: req.body.infectedWithCovid,
    infectionDate: req.body.infectionDate,
    diabetic: req.body.diabetic,
    bloodPressure: req.body.bloodPressure,
    chronicKidneyDisease: req.body.chronicKidneyDisease,
    congestiveHeartFailure: req.body.congestiveHeartFailure,
    organTransplant: req.body.organTransplant,
    chronicRespiratoryDisease: req.body.chronicRespiratoryDisease,
    cancerTreatmentOrWeakenTheImmuneSystem:
      req.body.cancerTreatmentOrWeakenTheImmuneSystem,
    weight: req.body.weight,
    height: req.body.height,
    healthSector: req.body.healthSector,
  });

  /*if (
    email == "" ||
    req.body.cin == "" ||
    req.body.dateOfBirth == "" ||
    req.body.firstName == "" ||
    req.body.lastName == "" ||
    req.body.gender == "" ||
    req.body.vaccinationGovernorate == "" ||
    req.body.vaccinationDelegation == "" ||
    req.body.infectedWithCovid == "" ||
    req.body.diabetic == "" ||
    req.body.bloodPressure == "" ||
    req.body.chronicKidneyDisease == "" ||
    req.body.congestiveHeartFailure == "" ||
    req.body.organTransplant == "" ||
    req.body.chronicRespiratoryDisease == "" ||
    req.body.cancerTreatmentOrWeakenTheImmuneSystem == "" ||
    req.body.weight == "" ||
    req.body.height == "" ||
    req.body.healthSector == ""
  ) {
    return res.status(400).json("fields cannot be empty");
  }*/
  citizen
    .save()
    .then((person) => {
      res.json({
        message: "Citizen Added Successfully!",
      });
    })
    .catch((error) => {
      res.send(error);
    });
  sendmail(
    {
      from: "evax@test.com",
      to: `${citizen.email}`,
      subject: "Succès d'inscription ",
      html: `<p> Le numéro CIN ${citizen.cin} est bien inscrit. Voici le code d'inscription : ${citizen.code} </p>`,
    },
    function (err, reply) {
      //console.log(err && err.stack);
      //console.dir(reply);
    }
  );
};

//add citizen without cin
const addNoCin = (req, res, next) => {
  const citizen = new Citizen({
    email: email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    fatherName: req.body.fatherName,
    grandfatherName: req.body.grandfatherName,
    motherFirstname: req.body.motherFirstname,
    motherLastname: req.body.motherLastname,
    birthGovernorate: req.body.birthGovernorate,
    birthDelegation: req.body.birthDelegation,
    birthMunicipality: req.body.birthMunicipality,
    vaccinationGovernorate: req.body.vaccinationGovernorate,
    vaccinationDelegation: req.body.vaccinationDelegation,
    infectedWithCovid: req.body.infectedWithCovid,
    infectionDate: req.body.infectionDate,
    diabetic: req.body.diabetic,
    bloodPressure: req.body.bloodPressure,
    chronicKidneyDisease: req.body.chronicKidneyDisease,
    congestiveHeartFailure: req.body.congestiveHeartFailure,
    organTransplant: req.body.organTransplant,
    chronicRespiratoryDisease: req.body.chronicRespiratoryDisease,
    cancerTreatmentOrWeakenTheImmuneSystem:
      req.body.cancerTreatmentOrWeakenTheImmuneSystem,
    weight: req.body.weight,
    height: req.body.height,
  });
  if (
    email == "" ||
    req.body.firstName == "" ||
    req.body.lastName == "" ||
    req.body.dateOfBirth == "" ||
    req.body.gender == "" ||
    req.body.fatherName == "" ||
    req.body.grandfatherName == "" ||
    req.body.motherFirstname == "" ||
    req.body.motherLastname == "" ||
    req.body.birthGovernorate == "" ||
    req.body.birthDelegation == "" ||
    req.body.birthMunicipality == "" ||
    req.body.vaccinationGovernorate == "" ||
    req.body.vaccinationDelegation == "" ||
    req.body.infectedWithCovid == "" ||
    req.body.diabetic == "" ||
    req.body.bloodPressure == "" ||
    req.body.chronicKidneyDisease == "" ||
    req.body.congestiveHeartFailure == "" ||
    req.body.organTransplant == "" ||
    req.body.chronicRespiratoryDisease == "" ||
    req.body.cancerTreatmentOrWeakenTheImmuneSystem == "" ||
    req.body.weight == "" ||
    req.body.height == ""
  ) {
    return res.status(400).json("fields cannot be empty");
  }
  citizen
    .save()
    .then((person) => {
      res.json({
        message: "Citizen Added Successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      });
    });
  sendmail(
    {
      from: "evax@test.com",
      to: `${citizen.email}`,
      subject: "Succès d'inscription ",
      html: `<p> Le citoyen ${citizen.firstName} ${citizen.lastName} est bien inscrit. Voici le code d'inscription : ${citizen.code} </p>`,
    },
    function (err, reply) {
      //console.log(err && err.stack);
      //console.dir(reply);
    }
  );
};

//add foreign citizen
const addForeign = (req, res, next) => {
  const citizen = new Citizen({
    email: email,
    passportNumber: req.body.passportNumber,
    dateOfBirth: req.body.dateOfBirth,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    nativeCountry: req.body.nativeCountry,
    vaccinationGovernorate: req.body.vaccinationGovernorate,
    vaccinationDelegation: req.body.vaccinationDelegation,
    infectedWithCovid: req.body.infectedWithCovid,
    infectionDate: req.body.infectionDate,
    diabetic: req.body.diabetic,
    bloodPressure: req.body.bloodPressure,
    chronicKidneyDisease: req.body.chronicKidneyDisease,
    congestiveHeartFailure: req.body.congestiveHeartFailure,
    organTransplant: req.body.organTransplant,
    chronicRespiratoryDisease: req.body.chronicRespiratoryDisease,
    cancerTreatmentOrWeakenTheImmuneSystem:
      req.body.cancerTreatmentOrWeakenTheImmuneSystem,
    weight: req.body.weight,
    height: req.body.height,
    healthSector: req.body.healthSector,
  });
  if (
    email == "" ||
    req.body.passportNumber == "" ||
    req.body.dateOfBirth == "" ||
    req.body.firstName == "" ||
    req.body.lastName == "" ||
    req.body.gender == "" ||
    req.body.nativeCountry == "" ||
    req.body.vaccinationGovernorate == "" ||
    req.body.vaccinationDelegation == "" ||
    req.body.infectedWithCovid == "" ||
    req.body.diabetic == "" ||
    req.body.bloodPressure == "" ||
    req.body.chronicKidneyDisease == "" ||
    req.body.congestiveHeartFailure == "" ||
    req.body.organTransplant == "" ||
    req.body.chronicRespiratoryDisease == "" ||
    req.body.cancerTreatmentOrWeakenTheImmuneSystem == "" ||
    req.body.weight == "" ||
    req.body.height == "" ||
    req.body.healthSector == ""
  ) {
    return res.status(400).json("fields cannot be empty");
  }
  citizen
    .save()
    .then((person) => {
      res.json({
        message: "Citizen Added Successfully!",
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      });
    });
  sendmail(
    {
      from: "evax@test.com",
      to: `${citizen.email}`,
      subject: "Succès d'inscription ",
      html: `<p> Le numéro PASSPORT ${citizen.passportNumber} est bien inscrit. Voici le code d'inscription : ${citizen.code} </p>`,
    },
    function (err, reply) {
      //console.log(err && err.stack);
      //console.dir(reply);
    }
  );
};

//add on pharmacy
const addOnPharmacy = (req, res, next) => {
  let citizen = new Citizen({
    vaccinationGovernorate: req.body.vaccinationGovernorate,
    vaccinationDelegation: req.body.vaccinationDelegation,
    appointment: true,
    dateOfAppointment: req.body.dateOfAppointment,
    vaccinationLocation: req.body.vaccinationLocation,
  });

  if (
    req.body.vaccinationGovernorate == "" ||
    req.body.vaccinationDelegation == "" ||
    req.body.dateOfAppointment == "" ||
    req.body.vaccinationLocation == ""
  ) {
    return res.status(400).json("fields cannot be empty");
  }
  citizen
    .save()
    .then((person) => {
      res.status(200).json({
        message: "Citizen Added Successfully!",
      });
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

//count registred
const countAll = (req, res, next) => {
  Citizen.count({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
};

//count dose1
const countDose1 = (req, res, next) => {
  Citizen.count({ dose1: "true" }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
};

//count dose2
const countDose2 = (req, res, next) => {
  Citizen.count({ dose1: "true", dose2: "true" }, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
};

//Get all Citizens
const getAll = (req, res) => {
  Citizen.find()
    .then((Citizen) => res.json(Citizen))
    .catch((err) => res.status(404).json("No citizens Found"));
};
//Get Citizen by Id
const getCitizenByCode = (req, res) => {
  Citizen.findOne({code : req.params.code})
    .then((Citizen) => res.json(Citizen))
    .catch((err) => res.status(404).json("citizen not found"));
};

//get data Citizen with the right code
const getDataWithRightCode = (req, res) => {
  var InputedCode = req.body.InputedCode;
  var RightCode = CodeVerif;
  if (InputedCode == RightCode) {
    Citizen.findOne({ code: req.params.code }).then((citizen) => {
      if (citizen) {
        res.status(200).json("Right code and find citizen");
      }
    });
  } else {
    res.status(400).json("Error code");
  }
};

//Edit Citizen data
const editCitizenWithCIN = (req, res) => {
  var newData = {
    email: req.body.email,
    cin: req.body.cin,
    dateOfBirth: req.body.dateOfBirth,
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    gender: req.body.gender,
    vaccinationGovernorate: req.body.vaccinationGovernorate,
    vaccinationDelegation: req.body.vaccinationDelegation,
    infectedWithCovid: req.body.infectedWithCovid,
    infectionDate: req.body.infectionDate,
    diabetic: req.body.diabetic,
    bloodPressure: req.body.bloodPressure,
    chronicKidneyDisease: req.body.chronicKidneyDisease,
    congestiveHeartFailure: req.body.congestiveHeartFailure,
    organTransplant: req.body.organTransplant,
    chronicRespiratoryDisease: req.body.chronicRespiratoryDisease,
    cancerTreatmentOrWeakenTheImmuneSystem:
      req.body.cancerTreatmentOrWeakenTheImmuneSystem,
    weight: req.body.weight,
    height: req.body.height,
    healthSector: req.body.healthSector,
  };
  Citizen.findOneAndUpdate(
    { code: req.params.code },
    { $set: newData },
    { new: true }
  )
    .then((Citizen) => res.status(200).json("citizen updated"))
    .catch((err) => res.json("citizen not updated"));
};
const editCitizenWithoutCIN = (req, res) => {
  var newData = {
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    fatherName: req.body.fatherName,
    grandfatherName: req.body.grandfatherName,
    motherFirstname: req.body.motherFirstname,
    motherLastname: req.body.motherLastname,
    birthGovernorate: req.body.birthGovernorate,
    birthDelegation: req.body.birthDelegation,
    birthMunicipality: req.body.birthMunicipality,
    vaccinationGovernorate: req.body.vaccinationGovernorate,
    vaccinationDelegation: req.body.vaccinationDelegation,
    infectedWithCovid: req.body.infectedWithCovid,
    infectionDate: req.body.infectionDate,
    diabetic: req.body.diabetic,
    bloodPressure: req.body.bloodPressure,
    chronicKidneyDisease: req.body.chronicKidneyDisease,
    congestiveHeartFailure: req.body.congestiveHeartFailure,
    organTransplant: req.body.organTransplant,
    chronicRespiratoryDisease: req.body.chronicRespiratoryDisease,
    cancerTreatmentOrWeakenTheImmuneSystem:
      req.body.cancerTreatmentOrWeakenTheImmuneSystem,
    weight: req.body.weight,
    height: req.body.height,
  };
  Citizen.findOneAndUpdate(
    { _id: req.params.id },
    { $set: newData },
    { new: true }
  )
    .then((Citizen) => res.status(200).json("citizen updated"))
    .catch((err) => res.json("citizen not updated"));
};

const editForeignCitizen = (req, res) => {
  var newData = {
    email: req.body.email,
    passportNumber: req.body.passportNumber,
    dateOfBirth: req.body.dateOfBirth,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    nativeCountry: req.body.nativeCountry,
    vaccinationGovernorate: req.body.vaccinationGovernorate,
    vaccinationDelegation: req.body.vaccinationDelegation,
    infectedWithCovid: req.body.infectedWithCovid,
    infectionDate: req.body.infectionDate,
    diabetic: req.body.diabetic,
    bloodPressure: req.body.bloodPressure,
    chronicKidneyDisease: req.body.chronicKidneyDisease,
    congestiveHeartFailure: req.body.congestiveHeartFailure,
    organTransplant: req.body.organTransplant,
    chronicRespiratoryDisease: req.body.chronicRespiratoryDisease,
    cancerTreatmentOrWeakenTheImmuneSystem:
      req.body.cancerTreatmentOrWeakenTheImmuneSystem,
    weight: req.body.weight,
    height: req.body.height,
    healthSector: req.body.healthSector,
  };
  Citizen.findOneAndUpdate(
    { _id: req.params.id },
    { $set: newData },
    { new: true }
  )
    .then((Citizen) => res.status(200).json("citizen updated"))
    .catch((err) => res.json("citizen not updated"));
};

// updateFirstStep
const updateFirstStep = (req, res) => {
  let email = req.body.email;
  let code = req.body.code;
  if (!email || !code) {
    return res.status(400).json("Fields cannot be empty");
  } else {
    Citizen.findOne({ code: code, email: email }).then((citizen) => {
      if (citizen) {
        res.status(200).json(citizen);
      } else {
        res.status(404).json("This user is not found");
      }
    });
  }
};
//updateCitizen
const updateCitizen = (req, res) => {
 
    let updatedData = req.body;

    Citizen.findOneAndUpdate({ code: req.params.code }, updatedData).then(
      (citizen) => {
        res.status(200).json(citizen);
      }
    );
  
};
//report Appointment
const reportAppointment = (req, res, next) => {
  let email = req.body.email;
  let code = req.body.code;
  let updatedData = {
    appointment: false,
  };
  if (!email || !code) {
    return res.status(400).json("Fields cannot be empty");
  } else {
    Citizen.findOne({ code, email }).then((citizen) => {
      if (citizen) {
        Citizen.findOneAndUpdate({ code, email }, updatedData).then(() => {
          res.status(200).json("Appointment reported successfully!");
        });
        sendmail({
          from: "evax@test.com",
          to: `${email}`,
          subject: "Report de rendez-vous de vaccination ",
          html: "<p> Bonjour, </p> <br/> <p>Nous vous envoyons ce mail pour vous informer que suite à votre demande , votre rendez-vous de vaccination a été reporté à une date ultérieure. </p> </br> <p> Nous vous informons de la nouvelle date de vaccination dans les prochains jours.</p>",
        });
      } else {
        res.status(400).json("An error occured");
      }
    });
  }
};

module.exports = {
  getCitizenByCode,
  updateFirstStep,
  sendCode,
  verifCode,
  addCin,
  addNoCin,
  addForeign,
  addOnPharmacy,
  countAll,
  countDose1,
  countDose2,
  sendCodeLoginEvax,

  updateCitizen,
  reportAppointment,
  getAll,
  getDataWithRightCode,
  editCitizenWithCIN,
  editCitizenWithoutCIN,
  editForeignCitizen,
};
