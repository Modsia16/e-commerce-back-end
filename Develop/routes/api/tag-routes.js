const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
  // finds all tags, includes its associated Product data
router.get('/', (req, res) => {
  Tag.findAll({
    include: [{
      model: Product,
      through: ProductTag
    }]
  })
    .then(tagData =>
      { res.json(tagData)
        })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    }
  );

});

router.get('/:id', (req, res) => {
  // finds a single tag by its `id`, includes its associated Product data
  Tag.findByPk(req.params.id, {
    include: [{
      model: Product,
      through: ProductTag
    }]
  })
    .then(tagData => {
      res.json(tagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    }
  );
});

 // creates a new tag
router.post('/', (req, res) => {
  ProductTag.create(req.body)
    .then(tagData => {
      res.json(tagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    }
  );
});

// updates a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update({
    name: req.body.name,
  }, {
    where: {
      id: req.params.id,
    },
  })
});

  // deletes on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(tagData => {
      res.json(tagData);
    })
    .catch(err => { 
      console.log(err);
      res.status(500).json(err);
    }
  );
});

module.exports = router;