const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  utilisateurId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  utilisateurEmail: { type: String, required: true },
  montant: { type: Number, required: true },
  devise: { type: String, default: 'EUR' },
  date: { type: Date, default: Date.now },
  lienPDF: { type: String }, // lien vers la facture générée (Stripe)
  stripeInvoiceId: { type: String }, // identifiant Stripe
  description: { type: String },
  type: { type: String, enum: ['abonnement', 'achat_unique'], default: 'abonnement' }
});

module.exports = mongoose.model('Invoice', invoiceSchema);
