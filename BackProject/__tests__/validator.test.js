const mongoose = require("mongoose")
const app = require("../app")
jest = require("jest")
//const Post = require("./models/Post") // new
const supertest = require("supertest")
  
beforeAll( function () {
    console.log("testing validation ")
   
   })
   describe("Validator test connection", function () {
    
    test('Validator have a code', async function() {
      await supertest(app)
          .post('/validation/connect')
          .send({login :"test",pwd:"test"})
          .expect(200)
          ;
      });
      test('Null password', async function() {
        await supertest(app)
            .post('/validation/connect')
            .send({login :"ikram"})
            .expect(400)
            ;
        });
        test('Null login', async function() {
            await supertest(app)
                .post('/validation/connect')
                .send({pwd :"ikram"})
                .expect(400)
                ;
            });
        test('wrong password', async function() {
            await supertest(app)
                .post('/validation/connect')
                .send({login :"ikram",pwd :"wrong"})
                .expect(400)
                ;
        });
    })
    describe("Validator tests register", function () {
    
        test('null password', async function() {
          await supertest(app)
              .post('/validation/register')
              .send({login:"ikram"})
              .expect(400)
              ;
          });
        test('null login', async function() {
            await supertest(app)
                .post('/validation/register')
                .send({pwd:"ikram"})
                .expect(400)
                ;
        });
        test('valid test', async function() {
            await supertest(app)
                .post('/validation/register')
                .send({pwd:"oumaya",login:"oumaya"})
                .expect(200)
                ;
            });
    })