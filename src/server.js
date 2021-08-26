const app = require('./app')
const { PORT } = require('./config')
const service = require('./Router/service')

function updateLocation(){
  service.getLocation()
}

setInterval(function () {
  updateLocation()
}, 5000);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})