const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
  // finds all tags, includes its associated Product data
router.get('/', (req, res) => {
  Tag.findAll({
    include: [{
      model: Product,
      through: ['product_name', 'price', 'stock', 'category_id']
    }]
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // finds a single tag by its `id`, includes its associated Product data
  Tag.findByPk(req.params.id, {
    include: [{
      model: Product,
      through: ['product_name', 'price', 'stock', 'category_id']
    }]
  })
    .then(dbTagData => {
      // If no tag is found with the id we specified, we will send a 404 response
      if (!dbTagData) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

 // creates a new tag
router.post('/', (req, res) => {
 Tag.create({
 tag_name: req.body.tag_name
})
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// updates a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update({
    tag_name: req.body.tag_name
  },
  {
    where: {
      id: req.params.id
    }
  })
    .then(dbTagData => {
      if (!dbTagData) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

  // deletes on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbTagData => {
      if (!dbTagData) {
        res.status(404).json({ message: 'No tag found with this id' });
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;