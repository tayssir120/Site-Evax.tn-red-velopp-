const mongoose = require("mongoose")
const app = require("../app")
jest = require("jest")
//const Post = require("./models/Post") // new
const supertest = require("supertest")
  
beforeAll( function () {
    console.log("testing validation ")
   
   })
   describe("Dashboard test", function () {
    
        test('test blood Pressure Vaccinated Number', async function() {
            await supertest(app)
                .get('/dashboard/bloodPressure_vaccinated_number')
                .expect(200)
                ;
        });

        test('test diabetic vaccinated number', async function() {
            await supertest(app)
                .get('/dashboard/diabetic_vaccinated_number')
                .expect(200)
                ;
        });
        test('test diabetic vaccinated number', async function() {
            await supertest(app)
                .get('/dashboard/diabetic_vaccinated_number')
                .expect(200)
                ;
        });
        test('test vaccinated number', async function() {
            await supertest(app)
                .get('/dashboard/VaccinatedNumber')
                .expect(200)
                ;
        });
    })
