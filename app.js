const express = require('express');
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts');

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    layout: 'layouts/main-layout',
    title: 'Home',
  });
});

app.get('/getcontact', (req, res) => {
  let exampleInputName1 = req.query.exampleInputName1;
  let exampleInputNumber1 = req.query.exampleInputNumber1;

  const { ObjectID } = require('bson');
  const { MongoClient, Db } = require('mongodb');

  const uri = 'mongodb://127.0.0.1:27017';
  const dbName = 'danielPrivate';

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  client.connect((error, client) => {
    if (error) {
      return console.log('Koneksi gagal');
    }
    //   pilih database
    const db = client.db(dbName);

    // menambah 1 data ke data collection My Contact
    db.collection('contacts').insertOne(
      {
        nama: exampleInputName1,
        noTelp: exampleInputNumber1,
      },
      (error, result) => {
        if (error) {
          return console.log('gagal menambahkan data!');
        }

        console.log(result);
      }
    );
    // menghapus 1 data
    // db.collection('contacts')
    //   .deleteOne({
    //     _id: ObjectID('62470e04dabcf364547a1517'),
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  });
  res.render('index', {
    layout: 'layouts/main-layout',
    title: 'Home',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: 'About',
  });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
