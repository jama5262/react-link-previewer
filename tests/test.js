const supertest = require('supertest');
const app = require('../app/routes/route');

test('testing the root path', async () => {
  const response = await supertest(app)
    .get('/')
  console.log(response.text);
  expect(response.status).toBe(200)
})

test('testing the preview with url and text query', async () => {
  const response = await supertest(app)
    .post('/preview')
    .query({
      text: "Microsoft’s latest Surface updates are causing CPU and Wi-Fi issues https://www.theverge.com/2019/8/15/20807401/microsoft-surface-firmware-updates-wi-fi-problems-cpu-throttling"
    })
  expect(response.status).toBe(200)
})

test('testing the preview with text query and no url', async () => {
  const response = await supertest(app)
    .post('/preview')
    .query({
      text: "Microsoft’s latest Surface updates are causing CPU and Wi-Fi issues"
    })
  console.log(response.text);
  expect(response.status).toBe(422)
})

test('testing the preview with url and no query text', async () => {
  const response = await supertest(app)
    .post('/preview')
    .query({
      test: "Microsoft’s latest Surface updates are causing CPU and Wi-Fi issues https://www.theverge.com/2019/8/15/20807401/microsoft-surface-firmware-updates-wi-fi-problems-cpu-throttling"
    })
  expect(response.status).toBe(404)
})

test('testing with unknown route', async () => {
  const response = await supertest(app)
    .post('/unknown')
  console.log(response.text);
  expect(response.status).toBe(404)
})