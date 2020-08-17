const router = require('express').Router();
let Test = require('../models/test.model');


router.route('/').get((req, res) => {
    Test.find()
    .then(tests => res.json(tests))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const short = req.body.short;
  const authority = req.body.authority;
  const description = req.body.description;
  const icode = Number(req.body.icode);
  const startDate = Date.parse(req.body.startDate);
  const endDate =Date.parse(req.body.endDate)?  Date.parse(req.body.endDate) :null;
  const projectTeams = req.body.projectTeams.map((pt)=>{
      return {
        category: pt.category,
        company: pt.company,
        pay:  pt.pay,
        percentage: pt.percentage
      }
  })


  const newTest = new Test({
    title,
    short,
    authority,
    description,
    icode,
    startDate,
    endDate,
    projectTeams,

  });


  newTest.save()
  .then(() => res.json('Test added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Test.findById(req.params.id)
    .then(test => res.json(test))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Test.findByIdAndDelete(req.params.id)
    .then(() => res.json('Test deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Test.findById(req.params.id)
    .then(test => {
        test.title = req.body.title;
        test.short = req.body.short;
        test.authority = req.body.authority;
        test.description = req.body.description;
        test.icode = Number(req.body.icode);
        test.startDate = Date.parse(req.body.startDate);
        test.endDate = Date.parse(req.body.endDate)?  Date.parse(req.body.endDate) :null;
        
        test.category = req.body.category;
        test.company = req.body.company;
        test.pay =  Number(req.body.pay);
        test.percentage =  Number(req.body.percentage);

        test.save()
        .then(() => res.json('Test updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;