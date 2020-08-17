const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const projectTeam = new Schema( {
    
    category: {type: String, required: true},
    company: { type: String, required: true },
    pay: { type: String, required: true },
    percentage: { type: Number, required: true }
        
})

const testSchema = new Schema({
  title: { type: String, required: true },
  short: { type: String, required: true },
  authority: { type: String, required: true },
  description: { type: String, required: true },
  icode: { type: Number },
  startDate:  { type: Date} ,
  endDate: { type: Date},
  projectTeams : [projectTeam] 

}, {
  timestamps: true,
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test