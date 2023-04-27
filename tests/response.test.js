const request = require('supertest');
const app = require('../server');

describe("POST /reponses/register", () => {
    test("should create a new user response", async () => {
      const newResponse = {
        user_id: "615d84d25be99a001682142c",
        questionnaire_id: "615d84d25be99a001682142d",
        timestamp : "2023-04-03T13:00:00.000Z",
        responses: [
          {
            number: 1,
            response: "Option A"
          },
          {
            number: 2,
            response: "Option C"
          }
        ]
      };
      
      const response = await request(app)
        .post("/responses/register")
        .send(newResponse);
  
        console.log(response.body);
  
      expect(response.statusCode).toBe(201);
      expect(response.body.message).toBe("Responses created successfully");
  
    }, 30000); // set timeout to 10 seconds
  
   
    test("should return an error when user_id not provided", async () => {
        const newResponse = {
            questionnaire_id: "615d84d25be99a001682142d",
            responses: [
              {
                number: 1,
                response: "Option A"
              },
            ]
          }; 
          const response = await request(app)
            .post("/responses/register")
            .send(newResponse);
      
          expect(response.statusCode).toBe(400);
          expect(response.body.message).toBe("All fields are required!");
    });
  
    test("should return an error when questionnaire_id not provided", async () => {
        const newResponse = {
            user_id: "615d84d25be99a001682142c",
            responses: [
              {
                number: 1,
                response: "Option A"
              },
            ]
          }; 
          const response = await request(app)
            .post("/responses/register")
            .send(newResponse);
      
          expect(response.statusCode).toBe(400);
          expect(response.body.message).toBe("All fields are required!");
    });
  
    test("should return an error when there are 0 responses", async () => {
        const newResponse = {
            user_id: "615d84d25be99a001682142c",
            questionnaire_id: "615d84d25be99a001682142d",
        
          }; 
          const response = await request(app)
            .post("/responses/register")
            .send(newResponse);
      
          expect(response.statusCode).toBe(400);
          expect(response.body.message).toBe("All fields are required!");
    });
    test("should return an error when there are is no timestamp", async () => {
      const newResponse = {
        user_id: "615d84d25be99a001682142c",
        questionnaire_id: "615d84d25be99a001682142d",
        responses: [
          {
            number: 1,
            response: "Option A"
          },
        ]
        }; 
        const response = await request(app)
          .post("/responses/register")
          .send(newResponse);
    
        expect(response.statusCode).toBe(400);
        expect(response.body.message).toBe("All fields are required!");
  });

  });
  

  
  