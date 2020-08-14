const router = require('express').Router();
let Project = require('../models/project.model');

router.route('/').get((req, res) => {
    Project.find()
    .then(projects => res.json(projects))
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
  const category = req.body.category;

  const company = req.body.company;
  const pay =  Number(req.body.pay);
  const percentage =  Number(req.body.percentage);


  const newProject = new Project({
    title,
    short,
    authority,
    description,
    icode,
    startDate,
    endDate,
    category,
    company,
    pay,
    percentage
  });


  newProject.save()
  .then(() => res.json('Project added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Project.findById(req.params.id)
    .then(project => res.json(project))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Project.findByIdAndDelete(req.params.id)
    .then(() => res.json('Project deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Project.findById(req.params.id)
    .then(project => {
        project.title = req.body.title;
        project.short = req.body.short;
        project.authority = req.body.authority;
        project.description = req.body.description;
        project.icode = Number(req.body.icode);
        project.startDate = Date.parse(req.body.startDate);
        project.endDate = Date.parse(req.body.endDate)?  Date.parse(req.body.endDate) :null;
        
        project.category = req.body.category;
        project.company = req.body.company;
        project.pay =  Number(req.body.pay);
        project.percentage =  Number(req.body.percentage);

        project.save()
        .then(() => res.json('Project updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;