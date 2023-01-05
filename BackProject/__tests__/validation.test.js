const mongoose = require("mongoose");
const app = require("../app");
jest = require("jest");
//const Post = require("./models/Post") // new
const supertest = require("supertest");

beforeAll(function () {
  console.log("testing validation ");
});

//const Post = require("../models/Post") // new

describe("Verifiaction tests", function () {
  test("user have a code", async function () {
    await supertest(app)
      .get("/validation/verification")
      .send({ cin: "123456789" })
      .expect(200);
  });
  test("user don t have a code", async function () {
    await supertest(app)
      .get("/validation/verification")
      .send({ cin: "123456785" })
      .expect(400);
  });
  test("null code", async function () {
    await supertest(app)
      .get("/validation/verification")
      .send({ cin: "" })
      .expect(400);
  });
});
describe("fixe tests", function () {
  test("null code", function () {
    supertest(app).post("/validation/fixe")
    .send({ code: "" }).expect(400);
  });
  test("should update dose1", async function () {
    const data = {
      code: "123456789",
      date: "2002-12-09",
      vaccine: "Astrazeneca",
    };
    await supertest(app)
      .post("/validation/fixe")
      .send(data)
      .expect(200)
      .then(() => {
        expect("Data updated successfully");
      });});

   
    test("null code", async function () {
      await supertest(app)
        .post("/validation/fixe")
        .send({ code: "" })
        .expect(400);
    });
  });
/*
describe("fixe tests", function () {
  test("null code", function () {
    supertest(app).post("/validation/fixe").send({ code: "" }).expect(400);
  });
  test("should update dose1", async function () {
    const data = {
      code: "35535407",
      date: "2002-12-09",
      vaccine: "Astrazeneca",
    };
    await supertest(app)
      .post("/validation/fixe")
      .send(data)
      .expect(200)
      .then(() => {
        expect("Data updated successfully");
      }, 30000);
  });
  test("should update vaccinated true", async function () {
    const data = {
      code: "35535407",
      date: "2002-12-09",
      vaccine: "Astrazeneca",
    };
    await supertest(app)
      .post("/validation/fixe")
      .send(data)
      .expect(200)
      .then(() => {
        expect("Data updated successfully");
      }, 30000);
  });
  test("should update vaccinated true and dose2 true", async function () {
    const data = {
      code: "35535407",
      date: "2002-12-09",
      vaccine: "Astrazeneca",
    };
    await supertest(app)
      .post("/validation/fixe")
      .send(data)
      .expect(200)
      .then(() => {
        expect("Data updated successfully");
      }, 30000);
  });
});*/

/*
     test('null code', async function() {
      await supertest(app)
          .post('/validation/fixe')
          .send({codeI :""})
          .expect(200,'null code')
          ;
      });
     
    })*/

describe("mobile tests", function () {
 test("valid test", async function () {
    data = {
      cin: 368778,
      email: "hiwit39798@pyrelle.com",
      firstname: "Hayet",
      lastname: "Hwas",
      gender: "Femme",
      fatherName: "Tayeb",
      motherFirstname: "Rafiia",
    };
    await supertest(app).post("/validation/mobile").send(data).expect(200);
  });
  test("null CIN", async function () {
    data = {
      cin: "",
      email: "hiwit39798@pyrelle.com",
      firstname: "Hayet",
      lastname: "Hwas",
      gender: "Femme",
      fatherName: "Tayeb",
      motherFirstname: "Rafiia",
    };
    await supertest(app).post("/validation/mobile").send(data).expect(400);
  });
  test("citizen don't have a code", async function () {
    data = {
      cin: "99991",
      email: "hiwit39798@pyrelle.com",
      firstname: "Hayet",
      lastname: "Hwas",
      gender: "Femme",
      fatherName: "Tayeb",
      motherFirstname: "Rafiia",
    };
    await supertest(app).post("/validation/mobile").send(data).expect(200);
  });
  
});
//const server = app()
