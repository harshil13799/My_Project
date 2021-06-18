

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';


import Order from 'App/Models/Order'


export default class OrdersController {
  public async index({ response }: HttpContextContract) {
    const order = await Order.all();
    response.json(order);
  }

  public async create({ request, response }: HttpContextContract) {

    const order = new Order();
    order.Total_amount = request.input("Total_amount");
    order.Customer_id = request.input("Customer_id");
    await order.save();
    response.json(order);
  }

  public async store({ }: HttpContextContract) {
  }

  public async show({ response, params }: HttpContextContract) {
    const order = await Order.find(params.Order_no);
    response.json(order);
  }

  public async edit({ }: HttpContextContract) {

  }

  public async update({ response, request, params }: HttpContextContract) {
    const order = await Order.query()
      .where("Order_no", "=", params.Order_no)
      .update({ Order_date: request.input("Order_date"), Total_amount: request.input("Total_amount"), Customer_id: request.input("Customer_id") });

    return response.json(order);

  }

  public async destroy({ response, params }: HttpContextContract) {
    // const order = await Order.findOrFail(params.Order_no);
    // order?.delete();
    // response.status(200).json("sucessful delete")
      const id = (params.Order_no);
      const order = await Order.findBy('Order_no',id);
      await order?.delete();
      return response.json(order);

  }
  public async getuserorder({ response, params }: HttpContextContract) {
    //  const order = new Order();
    //   await Database
    //   .table('orders')
    //   .('accounts', 'user.id', 'accounts.user_id')
    // //   return response.json(order);
    // const ordrer = await Order.query().innerJoin('orders','Order_no','Customer_id');
    // return response.json(ordrer);


    

    const order = await Database.from('orders').where('Customer_id', '=', params.Customer_id)
    return response.json(order);
  }
  public async getusername({response,params}:HttpContextContract){
    const order = await Database.from("customers")
    .innerJoin("orders", "customers.Customer_id","orders.Customer_id")
    .select("customers.Customer_name")
    .select("orders.*").where("orders.Customer_id","=",params.Customer_id);
    return response.json(order)
    
    
  }
  public async paginateData({response,params}:HttpContextContract){
    const page = (params.page);
    const limit = (params.limit);
    const post = await Database.from('orders').paginate(page,limit);
    return response.json(post);
  }
}