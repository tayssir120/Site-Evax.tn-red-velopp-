const supertest = require("supertest");
const app = require("../app");
jest.useFakeTimers("legacy");

describe("Volunteer", function () {
  beforeAll(function () {
    console.log("Start Tests");
  });
  test("should create a volunteer", async () => {
    const data = {
        firstName: "farah",
        lastName: "ben hlima",
        tel: 27933512,
        position: "médecin",
        workPlace: "monastir"
    };
    await supertest(app).post("/volunteer/add").send(data).expect(200);
  }, 30000);
  test("should return feilds empty in adding a volunteer", async () => {
    const data = {
        firstName: "farah",
        lastName: "",
        tel: 27933512,
        position: "",
        workPlace: ""
    };
    await supertest(app)
      .post("/volunteer/add")
      .send(data)
      .expect(400, '"fields cannot be empty"');
  }, 30000);
  test("Edit the personal informations of a volunteer ", async () => {
    const data = {
        firstName: "islem",
        lastName: "benia",
        tel: 27533512,
        position: "infermier",
        workPlace: "nabel"
    };
    await supertest(app)
      .post("/volunteer/update/61b3e65413ccf1ad8dcfddc7")
      .send(data)
      .expect(`"Volunteer updated successfully!"`)
      .expect(200);
  },30000);
  test("respond with json containing a single volunteer", async () => {
    await supertest(app)
      .get("/volunteer/get/61b3d6ccaada15eb8efceb0b")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  },30000);
  test("respond with json volunteer not found", async () => {
    await supertest(app)
      .get("/volunteer/get/61b3d6ccaada556sdkefceb0b")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404) //expecting HTTP status code
      .expect('"Volunteer Not Found"'); // expecting content value
  },30000);
  test("respond with json containing a list of all volunteers", async () => {
    await supertest(app)
      .get("/volunteer/list")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  },30000);
  test("should delete a volunteer", async () => {
    await supertest(app)
      .get("/volunteer/get/61b3e734cbd819e7d0b21f70")
      .expect(200)
  },30000);
  afterAll(function () {
    console.log("End Tests");
  });
});
