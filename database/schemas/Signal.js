const mongoose = require('mongoose');

const signalSchema = new mongoose.Schema({
  actif: { type: String, required: true }, // ex: BTC, AAPL
  type: { type: String, enum: ['achat', 'vente', 'call', 'put'], required: true },
  declencheur: { type: String }, // insider, hedge fund, politique, etc.
  date_achat: { type: Date },
  date_vente: { type: Date },
  score: { type: Number, min: 0, max: 100 },
  niveauConfiance: { type: String, enum: ['faible', 'moyen', 'élevé'], default: 'moyen' },
  details: {
    volatilite: Number,
    sentiment: String,
    sources: [String], // news, twitter, insiders, etc.
    backtest: {
      rendement: Number,
      drawdown: Number,
      gain_moyen: Number,
      taux_reussite: Number
    }
  },
  strategieIA: { type: String }, // nom de la stratégie IA utilisée
  marche: { type: String }, // crypto, actions, options, etc.
  creeParIA: { type: Boolean, default: true },
  genereLe: { type: Date, default: Date.now },
  utilisateurId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Signal', signalSchema);
