express = require('express')
app = express()


app.get '/', (req, res) ->
  res.setHeader('Content-Type', 'application/json');

  json = {
     "Version":"0.2.2",
     "GitCommit":"5a2a5cc+CHANGES",
     "GoVersion":"go1.0.3"
  }

  res.send json

app.listen(3001)