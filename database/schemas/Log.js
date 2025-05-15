const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['info', 'warning', 'error', 'cron', 'trade', 'signal'],
    default: 'info'
  },
  message: { type: String, required: true },
  details: { type: mongoose.Schema.Types.Mixed },
  timestamp: { type: Date, default: Date.now },
  source: { type: String } // ex: aiEngine, cronJob, userAction
});

module.exports = mongoose.model('Log', logSchema);
