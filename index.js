const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { logError, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')
const app = express();
const port = 3020;
app.use(express.json());

const whitelist = ['http://localhost:8080', 'http://127.0.0.1:8080', 'midominio.com'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    }else{
      callback( new Error("Acceso no permitido"))
    }
  }
}
app.use(cors(options));

routerApi(app);
app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Listen my port: " + port)
});
