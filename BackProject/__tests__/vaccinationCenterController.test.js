const supertest = require("supertest");
const app = require("../app");
jest.useFakeTimers("legacy");

describe("Vaccination center controller test", function () {
  beforeAll(function () {
    console.log("Start Tests");
  });

  test("should register a vaccination center", async () => {
    const data = {
      name: "test",
      type: "test",
      adress: "test",
      chefCenter: "test",
      centerGovernorate: "test",
      centerDelegation: "test",
      capacity: 50,
    };
    await supertest(app).post("/vaccinationCenter/add").send(data).expect(200);
  }, 30000);

  test("should return fields empty in add", async () => {
    const data = {
      name: "",
      type: "",
      adress: "test",
      chefCenter: "test",
      capacity: 50,
    };
    await supertest(app)
      .post("/vaccinationCenter/add")
      .send(data)
      .expect(400, '"fields cannot be empty"');
  }, 30000);

  test("should update a vaccination center", async () => {
    const data = {
      type: "test",
    };
    await supertest(app)
      .post("/vaccinationCenter/update/61a535006bc23ed01d1eb871")
      .send(data)
      .expect(200);
  });

  test("should return a vaccination center by id", async () => {
    await supertest(app)
      .get("/vaccinationCenter/get/61a535006bc23ed01d1eb871")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("vaccination center not found", async () => {
    await supertest(app)
      .get("/vaccinationCenter/get/61a119009baace903bfa6d40")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("should delete a vaccination center", async () => {
    await supertest(app)
      .get("/vaccinationCenter/delete/61a535006bc23ed01d1eb871")
      .expect(200);
  });

  test("should the list of all vaccination centers", async () => {
    await supertest(app)
      .get("/vaccinationCenter/list")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  afterAll(function () {
    console.log("End Tests");
  });
});
