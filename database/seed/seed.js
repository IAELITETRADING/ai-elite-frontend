const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });

const User = require('../../models/User');
const Signal = require('../../models/Signal');
const Strategy = require('../../models/Strategy');

const usersData = require('./users.json');
const signauxData = require('./signaux.json');
const strategiesData = require('./strategies.json');
const adminData = require('./admin.json');

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('✅ Connexion à MongoDB établie.');

    // Nettoyage des collections
    await User.deleteMany();
    await Signal.deleteMany();
    await Strategy.deleteMany();

    // Insertion des données
    const allUsers = [adminData, ...usersData];
    await User.insertMany(allUsers);
    await Signal.insertMany(signauxData);
    await Strategy.insertMany(strategiesData);

    console.log('✅ Base de données peuplée avec succès.');
    process.exit();
  } catch (err) {
    console.error('❌ Erreur de seed :', err);
    process.exit(1);
  }
}

seedDatabase();
