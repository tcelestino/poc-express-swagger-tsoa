import express from 'express';
import swaggerUI, { SwaggerUiOptions } from 'swagger-ui-express';
import FooController from '../v1/controllers/foo';
import swaggerDoc from '../../swagger.json';

const router = express.Router();

router.get('/foo', async (_req, res) => {
  const controller = new FooController();
  const response = await controller.getMessage();

  return res.status(200).send(response);
});

router.get('/foo/:id', async (req, res) => {
  const controller = new FooController();
  const response = await controller.getId(parseInt(req.params.id, 10));

  return res.status(200).send(response);
});

const options: SwaggerUiOptions = {
  swaggerOptions: {
    defaultModelsExpandDepth: -1,
  },
};
router.use('/docs', swaggerUI.serve);
router.get('/docs', swaggerUI.setup(swaggerDoc, options));

export default router;
