const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
  // finds all categories, include associated Products
router.get('/', (req, res) => {
  Category.findAll( {
    include: [Product],
  })
    .then(categoryData => {
      res.json(categoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


  // finds one category by its `id` value, including its associated Products
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {
    include: [Product],
  })
    .then(categoryData => {
      res.json(categoryData);
    })  
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    }
  ); 

});
// creates a new category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then(categoryData => {
      res.json(categoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  
});

router.put('/:id', (req, res) => {
  // updates a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    } 
  })
    .then(categoryData => {
      res.json(categoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    }
  );
});

router.delete('/:id', (req, res) => {
  // deletes a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(categoryData => {
      res.json(categoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
