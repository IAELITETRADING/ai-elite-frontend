const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  createdAt: { type: Date, default: Date.now },
  preferences: {
    riskLevel: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },
    markets: [String], // ex: ['crypto', 'actions']
    assets: [String], // ex: ['BTC', 'AAPL']
    autoTradeEnabled: { type: Boolean, default: false },
    brokerConnected: { type: Boolean, default: false },
    brokersUsed: [String], // ex: ['binance', 'oanda']
    language: { type: String, default: 'fr' }
  },
  demoMode: { type: Boolean, default: true },
  subscription: {
    active: { type: Boolean, default: false },
    plan: { type: String, enum: ['free', '1m', '6m', '12m'], default: 'free' },
    expiresAt: { type: Date }
  }
});

// Hashage automatique du mot de passe
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Méthode de vérification de mot de passe
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
