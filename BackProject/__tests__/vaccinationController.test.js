const supertest = require("supertest");
const app = require("../app");
describe("Vaccination", function () {
  beforeAll(function () {
    console.log("Start Tests");
  });

  test("should return a list of all vaccines", async () => {
    await supertest(app)
      .get("/vaccine/getAllVaccines")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("should add a vaccine", async () => {
    const data = {
      name: "testVaccine",
      quantity: 1000,
    };

    await supertest(app).post("/vaccine/addVaccine").send(data).expect(200);
  });
  test("should return error for undefined quantity", async () => {
    const data = {
      name: "testVaccine",
      quantity: "",
    };
    await supertest(app)
      .post("/vaccine/addVaccine")
      .send(data)
      .expect(400)
      .then(() => {
        expect("An error occured!");
      });
  });
  test("should update a vaccine", async () => {
    const data = {
      newQuantity: 2000,
     // quantity: 900,
    };
    await supertest(app)
      .post("/vaccine/updateVaccineQuantity/61d85ff8752eb5d458371231")
      .send(data)
      .expect(200)
      .then(() => {
        expect("Data updated successfully!");
      });
  });
  /*test("should affect an appointment to citizen", async () => {
    const data = {
      id: "61c20feb3b4323ee215a30ad",
      capacity: 50,
      cap: 50,
      nCapacity: 49,
      appointment: false,
      vaccinationLocation: "bardo",
      birthDelegation: "bardo",
      dateOfAppointment: "2022-01-04 19:11:59.346Z",
      idCitizen: "618597af2c166e9ad37d338c",
    };
    await supertest(app)
      .post("/vaccine/withoutAppointment")
      .send(data)
      .expect(200);
  });
*/
  test("should assign vaccine to center ", async () => {
    const data = {
      NCenter: "test",
      NVaccine: "testVaccine",
      vquantity: 100,
    };
    await supertest(app)
      .post("/vaccine/assignVaccineCenter")
      .send(data)
      .expect(200);
  });
 /* test("should return error for assign vaccine to center", async () => {
    const data = {
      NCenter: "test",
      NVaccine: "testVaccine",
      vquantity: "",
      quantity: 10,
    };
    await supertest(app)
      .post("/vaccine/assignVaccineCenter")
      .send(data)
      .expect(400)
      .then(() => {
        expect("An error occured!");
      }, 30000);
  });*/

  afterAll(function () {
    console.log("End Tests");
  });
});
