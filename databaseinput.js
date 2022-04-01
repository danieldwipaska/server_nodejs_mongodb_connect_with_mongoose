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
  //   db.collection('contacts').insertOne(
  //     {
  //       nama: 'Daniel',
  //       noTelp: '08888340024',
  //     },
  //     (error, result) => {
  //       if (error) {
  //         return console.log('gagal menambahkan data!');
  //       }

  //       console.log(result);
  //     }
  //   );

  db.collection('contacts')
    .deleteOne({
      _id: ObjectID('62470e04dabcf364547a1517'),
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
