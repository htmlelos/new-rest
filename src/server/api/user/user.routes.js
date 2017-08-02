export default function(app) {
  app.get('/users', (request, response) => {
    response.status(200).json()
  })
}