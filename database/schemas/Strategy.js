const mongoose = require('mongoose');

const strategySchema = new mongoose.Schema({
  nom: { type: String, required: true },
  description: { type: String },
  type: { type: String, enum: ['scalping', 'swing', 'income', 'ia-dynamique'], required: true },
  actif: { type: String }, // ex: BTC, AAPL, SPX
  marche: { type: String }, // ex: crypto, actions, forex
  frequence: { type: String, enum: ['quotidien', 'hebdo', 'mensuel'], default: 'quotidien' },
  indicateursUtilises: [String], // ex: ['MACD', 'RSI', 'Insiders', 'Volatilité']
  performances: {
    rendement: Number,
    drawdown: Number,
    taux_reussite: Number
  },
  genereeParIA: { type: Boolean, default: true },
  creeLe: { type: Date, default: Date.now },
  utilisateurId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Strategy', strategySchema);
