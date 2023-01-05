const supertest = require("supertest");
const app = require("../app");
jest.useFakeTimers("legacy");

describe("JPO controller test", function () {
  beforeAll(function () {
    console.log("Start Tests");
  });

  test("should return feilds empty in add", async () => {
    const data = {
        centerName: "",
        numberPeopleToBeVaccinated: 200,
        chefCenter: "",
        nameOfvaccine: "",
        quantity: 50,
        ageRange: "",
        centerId : "61b5f03f6fd67f8922caf753"
    };
    await supertest(app)
      .post("/JPO/add")
      .send(data)
      .expect(400, '"fields cannot be empty"');
  }, 30000);

  test("should update a JPO", async () => {
    const data = {
        chefCenter: "ahalawi",
    };
    await supertest(app)
      .post("/JPO/update/61d85c981ae69c8fd2f3878c")
      .send(data)
      .expect(200);
  });

  test("should return a JPO by id", async () => {
    await supertest(app)
      .get("/JPO/get/61b5f03f6fd67f8922caf753")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("JPO not found", async () => {
    await supertest(app)
      .get("/JPO/get/61b5f03f6fd67f847079af753")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404) 
  });

  test("should delete a JPO", async () => {
    await supertest(app)
      .get("/JPO/delete/61d85d761ae69c8fd2f38792")
      .expect(200);
  });

  test("should the list of all JPOs", async () => {
    await supertest(app)
      .get("/JPO/list")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  afterAll(function () {
    console.log("End Tests");
  });
});