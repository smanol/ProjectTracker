const router = require('express').Router();
let Company = require('../models/company.model');

router.route('/').get((req, res) => {
    Company.find()
    .then(companies => res.json(companies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;

  const newCompany = new Company({name});

  newCompany.save()
    .then(() => res.json('Company added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Company.findByIdAndDelete(req.params.id)
  .then(() => res.json('Company deleted.'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;