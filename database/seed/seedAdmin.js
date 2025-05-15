const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ai_elite';

const seedAdmin = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connexion MongoDB établie');

    const existingAdmin = await User.findOne({ email: 'admin@ai-elite.com' });
    if (existingAdmin) {
      console.log('⚠️  Admin déjà existant : aucun changement.');
      return process.exit(0);
    }

    const passwordHash = await bcrypt.hash('Admin123!', 10);

    const adminUser = new User({
      email: 'admin@ai-elite.com',
      password: passwordHash,
      username: 'AIEliteAdmin',
      isAdmin: true,
      isSubscribed: true,
      subscriptionEnd: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) // 1 an
    });

    await adminUser.save();

    console.log('✅ Admin créé avec succès : admin@ai-elite.com / Admin123!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Erreur lors du seed admin :', err);
    process.exit(1);
  }
};

seedAdmin();
