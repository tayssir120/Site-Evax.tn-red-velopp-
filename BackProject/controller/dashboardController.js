const User = require("../model/citizen");

const index = (req, res) => {
  res.json({
    message: "dashboard",
  });
};

const connectAdmin = (req, res) => {
  login = req.body.login;
  pwd = req.body.pwd;
  if (login == "admin" && pwd == "admin") {
   
    return res.status(200).json('Admin connected');

  } else {
    
    return res.status(400).json('verify login and password ');

  }
};

const diabeticVaccinatedNumber = (req, res) => {
  let x = User.count({ bloodPressure: true, vaccinated: true }).then((nbr) => {
    if (nbr) {
      res.json({
        nbr,
      });
    }
  });
};
const bloodPressureVaccinatedNumber = (req, res) => {
  let x = User.count({ diabetic: true, vaccinated: true }).then((nbr) => {
    if (nbr) {
      res.json({
        nbr,
      });
    } else {
      res.json({
        nbr: 0,
      });
    }
  });
};

const chronicKidneyDiseaseVaccinatedNumber = (req, res) => {
  let x = User.count({ chronicKidneyDisease: true, vaccinated: true }).then(
    (nbr) => {
      if (nbr) {
        res.json({
          nbr,
        });
      } else {
        res.json({
          nbr: 0,
        });
      }
    }
  );
};
const congestiveHeartFailureVaccinatedNumber = (req, res) => {
  let x = User.count({ congestiveHeartFailure: true, vaccinated: true }).then(
    (nbr) => {
      if (nbr) {
        res.json({
          nbr,
        });
      } else {
        res.json({
          nbr: 0,
        });
      }
    }
  );
};
//le nombre des jeunes, adultes .. vaccinés
const VaccinatedNumber = (req, res) => {
  d = "2002-12-09T00:00:00.000+00:00";
  date = new Date();
  nbYoung = 0;
  nbOld = 0;
  nbAdult = 0;
  // date='2002-12-09T00:00:00.000+00:00'
  let x = User.find({}).then((citizens) => {
    if (citizens) {
      for (i = 0; i < citizens.length; i++) {
        d = new Date(citizens[i].dateOfBirth);
        year = parseInt(d.getFullYear());
        y = parseInt(date.getFullYear());
        if (year == y - 19 || year == y - 18) {
          nbYoung++;
        } else if (year <= y - 20 && year >= y - 40) {
          nbAdult++;
        } else if (year <= y - 41) {
          nbOld++;
        }
      }

      res.json({
        Young: nbYoung,
        Adult: nbAdult,
        Old: nbOld,
      });
    } else {
      res.json({
        Young: 0,
        Adult: 0,
        Old: 0,
      });
    }
  });
};

const chronicRespiratoryDiseaseVaccinatedNumber = (req, res) => {
  let x = User.count({
    chronicRespiratoryDisease: true,
    vaccinated: true,
  }).then((nbr) => {
    if (nbr) {
      res.json({
        nbr,
      });
    } else {
      res.json({
        nbr: 0,
      });
    }
  });
};
const cancerTreatmentOrWeakenTheImmuneSystemVaccinatedNumber = (req, res) => {
  let x = User.count({
    cancerTreatmentOrWeakenTheImmuneSystem: true,
    vaccinated: true,
  }).then((nbr) => {
    if (nbr) {
      res.json({
        nbr,
      });
    } else {
      res.json({
        nbr: 0,
      });
    }
  });
};

module.exports = {
  index,
  bloodPressureVaccinatedNumber,
  diabeticVaccinatedNumber,
  chronicKidneyDiseaseVaccinatedNumber,
  congestiveHeartFailureVaccinatedNumber,
  chronicRespiratoryDiseaseVaccinatedNumber,
  cancerTreatmentOrWeakenTheImmuneSystemVaccinatedNumber,
  VaccinatedNumber,
  connectAdmin,
};
