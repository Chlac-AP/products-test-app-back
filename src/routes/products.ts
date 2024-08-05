import express, { Request, Response } from 'express'
import { ProductDao } from "../dao/_index";
import { Product } from '../sqlz/models/product';

var router = express.Router();

/* GET users listing. */
router.get('/', function (req: Request, res: Response, next) {
  ProductDao
    .findAll()
    .then(products => {
      res.status(200).send(products.map((p: Product) => ({ ...p.dataValues, inventoryStatus: p.inventoryStatus() })))
    }
    )
    .catch(error => res.status(500).send(error))
});

router.post('/', function (req: Request, res: Response, next) {

  const promises = [];
  for (let product of req.body) {
    promises.push(ProductDao.createProduct(product))
  }

  Promise.all(promises)
    .then(products => res.status(200).send(products))
    .catch(error => res.status(500).send(error))
})


router.delete('/', function (req: Request, res: Response, next) {

  const promises = [];
  for (let product of req.body) {
    promises.push(ProductDao.deleteProduct(product))
  }

  Promise.all(promises)
    .then(products => res.status(200).send(products))
    .catch(error => res.status(500).send(error))
})

router.put('/', function (req: Request, res: Response, next) {

  const promises = [];
  for (let product of req.body) {
    promises.push(ProductDao.updateProduct(product))
  }

  Promise.all(promises)
    .then(products => res.status(200).send(products))
    .catch(error => res.status(500).send(error))
})

module.exports = router;
