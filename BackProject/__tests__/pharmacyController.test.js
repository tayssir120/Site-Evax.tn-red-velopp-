const supertest = require("supertest");
const app = require("../app");
jest.useFakeTimers("legacy");

describe("Pharmacy controller test", function () {
  beforeAll(function () {
    console.log("Start Tests");
  });

  test("should register a pharmacy", async () => {
    const data = {
      name: "test",
      ref: "test",
      fixNumber: 11111111,
      mobileNumber: 11111111,
      type: "test",
      adress: "test",
      pharmacist: {
        cin: "11111111",
        dateOfBirth: "1990-01-01",
        firstName: "test",
        lastName: "test",
        email: "test",
        phoneNumber: 11111111,
      },
    };
    await supertest(app).post("/pharmacy/add").send(data).expect(200);
  }, 30000);

  test("should return feilds empty in add", async () => {
    const data = {
      name: "",
      ref: "",
      fixNumber: 11111111,
      mobileNumber: 11111111,
      type: "test",
      adress: "",
      pharmacist: {
        cin: "11111111",
        dateOfBirth: "1990-01-01",
        firstName: "test",
        lastName: "test",
        email: "test",
        phoneNumber: 11111111,
      },
    };
    await supertest(app)
      .post("/pharmacy/add")
      .send(data)
      .expect(400, '"fields cannot be empty"');
  }, 30000);

  test("should update a pharmacy", async () => {
    const data = {
      type: "test",
    };
    await supertest(app)
      .post("/pharmacy/update/61a13d262ccd7ece7f0b36d0")
      .send(data)
      .expect(200);
  });

  test("should return a pharmacy by id", async () => {
    await supertest(app)
      .get("/pharmacy/get/61a13d262ccd7ece7f0b36d0")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("pharmacy not found", async () => {
    await supertest(app)
      .get("/pharmacy/get/61a119009baace903bfa6d40")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("should the list of all pharmacies", async () => {
    await supertest(app)
      .get("/pharmacy/list")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("should delete a pharmacy", async () => {
    await supertest(app)
      .get("/pharmacy/delete/61a53a1090eb134d574594a7")
      .expect(200);
  });

  afterAll(function () {
    console.log("End Tests");
  });
});
