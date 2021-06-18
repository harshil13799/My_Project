import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async index ({response}: HttpContextContract) {
    const product = await Product.all();
    if (product.length > 0) {
      return response.json(product);
    } else {
      return response.json({
        message: "No product",
      });
    }
  }


  public async create ({request,response}: HttpContextContract) {
    const product = new Product();
    product.Product_name = request.input("Product_name");
    product.Product_price = request.input("Product_price");
    await product.save();
    response.json(product);
  }

  public async store ({}: HttpContextContract) {
  }

  public async show ({response,params}: HttpContextContract) {
    const  product = await Product.find(params.Product_id);

    return response.json(product);
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({request, response, params}: HttpContextContract) {

    // const product = await Product.query()
    // .where("Product_id", "=", params.Product_id)
    // .update({ Product_name: request.input("Product_name"),Product_price: request.input("Product_price") });
      const product = await Product.findOrFail(params.Product_id);
      product.Product_name=request.input("Product_name");
      product.Product_price=request.input("Product_price");
      await product.save();
  return response.json(product);
  }

  public async destroy ({response,params}: HttpContextContract) {
    const product = await Product.find(params.Product_id);
    await product?.delete();
    return response.json(product);

  }
}