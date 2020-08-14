const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  short: { type: String, required: true },
  authority: { type: String, required: true },
  description: { type: String, required: true },
  icode: { type: Number },

  startDate: { type: Date },
  endDate: { type: Date},

  category: {type: String, required: true},
  company: { type: String, required: true },
  pay: { type: Number, required: true },
  percentage: { type: Number, required: true },


}, {
  timestamps: true,
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;