const supertest = require("supertest");
const app = require("../app");
jest.useFakeTimers("legacy");

describe("Citizen", function () {
  beforeAll(function () {
    console.log("Start Tests");
  });

  test("should update a citizen", async () => {
    const data = {
      email: "haxaso3238@d3ff.com",
      
      firstname: "testJest",
    };
    await supertest(app)
      .post("/citizen/update/11178161")
      .send(data)
      .expect(200)
      .then(() => {
        expect("Data updated successfully!");
      });
  });
 
  
  test("should send an email for reporting appointment", async () => {
    const data = {
      email: "hiwit39798@pyrelle.com",
      code: 69412321 ,
      appointment: false,
    };
    console.log("test");
    await supertest(app)
      .post("/citizen/report")
      .send(data)
      .expect(200)
      .then(() => {
        expect("Appointment reported successfully!");
      }, 30000);
  });
  
  test("should return error for undefined email", async () => {
    const data = {
      email: "",
    };
    await supertest(app)
      .post("/citizen/report")
      .send(data)
      .expect(400)
      .then(() => {
        expect("An error occured!");
      }, 30000);
  });
  test("respond with json containing a list of all users", async () => {
    await supertest(app)
      .get("/citizen/get-all")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });
  
  test("respond with json containing a single citizen", async () => {
    await supertest(app)
      .get("/citizen/get?code=61d857772e76c6ee746c2d66")
      
      .expect(200);
  });
  
  test("respond with json citizen not found", async () => {
    await supertest(app)
      .get("/citizen/get/654851lkskzokzozod57kkouh")
      
      .expect(404) //expecting HTTP status code
     ; // expecting content value
  });
  
  test("respond with sending mail to citizen containing the verification number ", async () => {
    const data = {
      email: "gebob85196@upsdom.com",
    };
    await supertest(app)
      .post("/citizen/EvaxLogin")
      .send(data)
      .expect(200);
  }, 30000);
  test("respond with sending mail to citizen containing the verification number(field empty)", async () => {
    const data = {
      code: "",
    };
    await supertest(app)
      .post("/citizen/EvaxLogin")
      .send(data)
      .expect(400);
  });
  
  test("respond with verifing the code after sending mail with the right code", function () {
    const data = {
      InputedCode: 805530,
    };
    supertest(app)
      .post("/citizen/getDataWithRightCode/69412321")
      .send(data)
      .expect(200);
  });
  
  test("respond with verifing the code after sending mail with the wrong code", async () => {
    const data = {
      InputedCode: 544151,
    };
    await supertest(app)
      .post("/citizen/getDataWithRightCode/694121")
      .send(data)
      .expect(400);
  });
  
  test("Edit the personal informations of a citizen with a cin", async () => {
    const data = {
      email: "jbeliatayssir@gmail.com",
      cin: 11403727,
      dateOfBirth: "1950-02-06T23:00:00.000+00:00",
      firstname: "jbelia",
      lastname: "tayssir",
      gender: "female",
      vaccinationGovernorate: "bizerte",
      vaccinationDelegation: "alia",
      infectedWithCovid: true,
      infectionDate: "2019-10-07T22:00:00.000+00:00",
      diabetic: false,
      bloodPressure: false,
      chronicKidneyDisease: false,
      congestiveHeartFailure: false,
      organTransplant: false,
      chronicRespiratoryDisease: false,
      cancerTreatmentOrWeakenTheImmuneSystem: false,
      weight: 76,
      height: 1.68,
      healthSector: false,
    };
    await supertest(app)
      .post("/citizen/editCIN/617c5d6d7efa48c0a02e06a6")
      .send(data)
      .expect(`"citizen updated"`)
      .expect(200);
  });
  
  test("Edit the personal informations of a citizen without a cin", async () => {
    const data = {
      email: "jbeliatayssir@gmail.com",
      dateOfBirth: "1950-02-06T23:00:00.000+00:00",
      firstname: "jbelia",
      lastname: "tayssir",
      gender: "female",
      fatherName: "yassine",
      grandfatherName: "maki",
      motherFirstname: "mofida",
      motherLastname: "maddeh",
      birthGovernorate: "bizerte",
      birthDelegation: "bizerte nord",
      birthMunicipality: "bizerte",
      vaccinationGovernorate: "bizerte",
      vaccinationDelegation: "alia",
      infectedWithCovid: true,
      infectionDate: "2019-10-07T22:00:00.000+00:00",
      diabetic: false,
      bloodPressure: false,
      chronicKidneyDisease: false,
      congestiveHeartFailure: false,
      organTransplant: false,
      chronicRespiratoryDisease: false,
      cancerTreatmentOrWeakenTheImmuneSystem: false,
      weight: 76,
      height: 1.68,
      healthSector: "health",
    };
    await supertest(app)
      .post("/citizen/editNOCIN/617c5d6d7efa48c0a02e06a6")
      .send(data)
      .expect(`"citizen updated"`)
      .expect(200);
  });
  /*test("Edit the personal informations of a foreign citizen ", async () => {
    const data = {
      passportNumber: "1140372725866",
      nativeCountry: "france",
      email: "jbeliatayssir@gmail.com",
      dateOfBirth: "1950-02-06T23:00:00.000+00:00",
      firstname: "jbelia",
      lastname: "tayssir",
      gender: "female",
      fatherName: "yassine",
      grandfatherName: "maki",
      motherFirstname: "mofida",
      motherLastname: "maddeh",
      birthGovernorate: "bizerte",
      birthDelegation: "bizerte nord",
      birthMunicipality: "bizerte",
      vaccinationGovernorate: "bizerte",
      vaccinationDelegation: "alia",
      infectedWithCovid: true,
      infectionDate: "2019-10-07T22:00:00.000+00:00",
      diabetic: false,
      bloodPressure: false,
      chronicKidneyDisease: false,
      congestiveHeartFailure: false,
      organTransplant: false,
      chronicRespiratoryDisease: false,
      cancerTreatmentOrWeakenTheImmuneSystem: false,
      weight: 76,
      height: 168,
      healthSector: false,
    };
    await supertest(app)
      .post("/citizen/editFOREIGN/617c5d6d7efa48c0a02e06a6")
      .send(data)
      .expect(`"citizen updated"`)
      .expect(200);
  });*/
  /*
  test("should return a verification code", async () => {
    const data = {
      email: "hiwit39798@pyrelle.com",
    };
    await supertest(app).post("/citizen/sendCode").send(data).expect(200);
  }, 300000);*/

  test("should verify inputed code", () => {
    supertest(app)
      .post("/citizen/verifCode")
      .send({ inputedCode: "182509" })
      .expect(200, '"Right code"');
  }, 30000);

  test("should return error code if inputed code wrong", async () => {
    await supertest(app)
      .post("/citizen/verifCode")
      .send({ inputedCode: "291454" })
      .expect(400, '"Error code"');
  }, 30000);

  test("should register a citizen by cin", async () => {
    const data = {
      email: "sakifi3925@ecofreon.com",
      cin: "22222222",
      dateOfBirth: "2000-01-01",
      firstname: "test",
      lastname: "test",
      gender: "test",
      vaccinationGovernorate: "test",
      vaccinationDelegation: "test",
      infectedWithCovid: "false",
      diabetic: "false",
      bloodPressure: "false",
      chronicKidneyDisease: "false",
      congestiveHeartFailure: "false",
      organTransplant: "false",
      chronicRespiratoryDisease: "false",
      cancerTreatmentOrWeakenTheImmuneSystem: "false",
      weight: 50,
      height: 150,
      healthSector: "false",
    };
    await supertest(app).post("/citizen/addCin").send(data).expect(200);
  }, 30000);
/*
  test("should register a citizen without cin", async () => {
    const data = {
      email: "sakifi3925@ecofreon.com",
      firstName: "test",
      lastName: "test",
      dateOfBirth: "2000-01-01",
      gender: "femme",
      fatherName: "test",
      grandfatherName: "test",
      motherFirstname: "test",
      motherLastname: "test",
      birthGovernorate: "test",
      birthDelegation: "test",
      birthMunicipality: "test",
      vaccinationGovernorate: "test",
      vaccinationDelegation: "test",
      infectedWithCovid: "false",
      diabetic: "false",
      bloodPressure: "false",
      chronicKidneyDisease: "false",
      congestiveHeartFailure: "false",
      organTransplant: "false",
      chronicRespiratoryDisease: "false",
      cancerTreatmentOrWeakenTheImmuneSystem: "false",
      weight: 50,
      height: 150,
    };
    await supertest(app).post("/citizen/addNoCin").send(data).expect(200);
  }, 30000);*/

  test("should return feilds empty in addNoCin", async () => {
    const data = {
      email: "sakifi3925@ecofreon.com",
      firstName: "",
      lastName: "",
      dateOfBirth: "2000-01-01",
      gender: "",
      fatherName: "test",
      grandfatherName: "test",
      motherFirstname: "",
      motherLastname: "test",
      birthGovernorate: "test",
      birthDelegation: "",
      birthMunicipality: "test",
      vaccinationGovernorate: "test",
      vaccinationDelegation: "test",
      infectedWithCovid: "false",
      diabetic: "false",
      bloodPressure: "false",
      chronicKidneyDisease: "",
      congestiveHeartFailure: "false",
      organTransplant: "false",
      chronicRespiratoryDisease: "false",
      cancerTreatmentOrWeakenTheImmuneSystem: "false",
      weight: 50,
      height: 150,
    };
    await supertest(app)
      .post("/citizen/addNoCin")
      .send(data)
      .expect(400, '"fields cannot be empty"');
  }, 30000);
/*
  test("should register a forein citizen by passport number", async () => {
    const data = {
      email: "sakifi3925@ecofreon.com",
      passportNumber: "x142536",
      dateOfBirth: "2000-01-01",
      firstname: "test",
      lastname: "test",
      gender: "femme",
      nativeCountry: "test",
      vaccinationGovernorate: "test",
      vaccinationDelegation: "test",
      infectedWithCovid: "true",
      infectionDate: "2020-01-02",
      diabetic: "false",
      bloodPressure: "false",
      chronicKidneyDisease: "false",
      congestiveHeartFailure: "false",
      organTransplant: "false",
      chronicRespiratoryDisease: "false",
      cancerTreatmentOrWeakenTheImmuneSystem: "false",
      weight: 50,
      height: 150,
      healthSector: "false",
    };
    await supertest(app).post("/citizen/addForeign").send(data).expect(200);
  }, 30000);*/

  

  test("should return the number of citizen registred", async () => {
    await supertest(app).get("/citizen/countAll").expect(200);
  }, 30000);

  test("should return the number of citizens who have already vaccinated the first dose", async () => {
    await supertest(app).get("/citizen/countDose1").expect(200);
  }, 30000);

  test("should return the number of citizens who have already vaccinated the second dose", async () => {
    await supertest(app).get("/citizen/countDose2").expect(200);
  }, 30000);

  test("should return null email if email is empty", async () => {
    await supertest(app)
      .post("/citizen/sendCode")
      .send({ email: "" })
      .expect(400, '"null email"');
  }, 30000);
  afterAll(function () {
    console.log("End Tests");
  });
});
