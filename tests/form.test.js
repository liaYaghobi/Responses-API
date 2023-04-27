
const request = require('supertest');
const app = require('../server');


describe('GET /', () => {
  it('should return "Hello World"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World');
  });
});

//Post Request for register end point
describe("POST /questionnaire/register", () => {
  test("should create a new questionnaire (ONLY WORKS IF YOU CHANGE THE NAME EVERY TIME)", async () => {
    const newQuestionnaire = {
      name: "Test Questionnaire 240023",
      questions: [
        {
          prompt: "What is your favorite color?",
          type: "Radio Button",
          answers: ["Red", "Green", "Blue"]
        }
      ]
    };
    
    const response = await request(app)
      .post("/questionnaire/register")
      .send(newQuestionnaire);

      console.log(response.body);

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe("Test Questionnaire 240023");
    expect(response.body.questions).toHaveLength(1);
    expect(response.body.questions[0].prompt).toBe("What is your favorite color?");
  }, 30000); // set timeout to 10 seconds

 
  test("should return an error when name is not provided", async () => {
    const newQuestionnaire = {
      questions: [
        {
          prompt: "What is your favorite color?",
          type: "Radio Button",
          answers: ["Red", "Green", "Blue"]
        }
      ]
    };
    
    const response = await request(app)
      .post("/questionnaire/register")
      .send(newQuestionnaire);

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Fields are empty!");
  });

  test("should return an error when questionnaire has 0 questions", async () => {
    const newQuestionnaire = {
      name: "Test Questionnaire 2"
    };
    
    const response = await request(app)
      .post("/questionnaire/register")
      .send(newQuestionnaire);

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Fields are empty!");
  });

  test("should return an error when questionnaire is made with a duplicate name", async () => {
    const newQuestionnaire = {
      name: "Questionnaire 1",
      questions: [
        {
          prompt: "What is your favorite color?",
          type: "Radio Button",
          answers: ["Red", "Green", "Blue"]
        }
      ]
    };
    
    const response = await request(app)
      .post("/questionnaire/register")
      .send(newQuestionnaire);

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Questionnaire with this name already exists!");
  });

});

describe('GET /questionnaire/detail/:name', () => {
  test('It should return the questionnaire with the given name', async () => {
    const res = await request(app).get('/questionnaire/detail/Test Questionnaire');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Test Questionnaire');
  });

  test('It should return 404 if questionnaire not found', async () => {
    const res = await request(app).get('/questionnaire/detail/nonexistent');
    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty('message', 'Questionnaire not found');
  });

});








