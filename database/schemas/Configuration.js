const mongoose = require('mongoose');

const configurationSchema = new mongoose.Schema({
  commission: {
    type: Number,
    default: 0.5, // Pourcentage par trade
    min: 0,
    max: 10
  },
  preValidation: {
    type: Boolean,
    default: true // Ordres manuels si vrai, sinon trading auto direct
  },
  miseAJour: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Configuration', configurationSchema);
