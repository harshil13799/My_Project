import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Orderitem from 'App/Models/Orderitem';

export default class OrderitemsController {
  public async index ({response}: HttpContextContract) {
    const orderitem = await Orderitem.all();
    response.json(orderitem);
  }

  public async create ({request,response}: HttpContextContract) {
    const orderitem = new Orderitem();
    orderitem.Order_no=request.input("Order_no");
    orderitem.Product_id=request.input("Product_id")
    let xyz= orderitem.Quantity=request.input("Quantity")
    let abc = orderitem.Price_per_item=request.input("Price_per_item")
    orderitem.Amount=(xyz * abc)
    await orderitem.save();
    response.status(200).json(orderitem)


  }

  public async store ({}: HttpContextContract) {
  }

  public async show ({params,response}: HttpContextContract) {
    const  orderitem = await Orderitem.find(params.Order_itemno );
    return response.json(orderitem);
  }

  public async edit ({}: HttpContextContract) {
  
  }

  public async update ({params,request,response}: HttpContextContract) {
    const orderitem = await  Orderitem.findOrFail(params.Order_itemno);
    orderitem.Order_no=request.input("Order_no");
    orderitem.Product_id=request.input("Product_id")
    let xyz= orderitem.Quantity=request.input("Quantity")
    let abc = orderitem.Price_per_item=request.input("Price_per_item")
    orderitem.Amount=(xyz * abc)
    await orderitem.save();
    response.status(200).json(orderitem)

  }

  public async destroy ({response,params}: HttpContextContract) {
    const orderitem = await Orderitem.findOrFail(params.Order_itemno);
    await orderitem.delete();
     response.json("sucess fully delete");
    
  }
}