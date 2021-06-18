import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Customer from "App/Models/Customer";
export default class CustomersController {
  public async index({ response }: HttpContextContract) {
    const customer = await Customer.all();
    if (customer.length > 0) {
      return response.json(customer);
    } else {
      return response.json({
        message: "No Customer",
      });
    }
  }

  public async create({ request, response }: HttpContextContract) {
    const customer = new Customer();
    customer.Customer_name = request.input("Customer_name");
    await customer.save();
    response.json(customer);
  }

  public async store({response,params}: HttpContextContract) {
    debugger
    const customer = await Customer.find(params.Customer_name);
    return response.json({customer:customer?.Customer_name})
  }

  public async show({ response, params }: HttpContextContract) {
    const customer = await Customer.find(params.Customer_id);

    return response.json(customer);
  }

  public async edit({}: HttpContextContract) {}

  public async update({ request, response, params }: HttpContextContract) {
    
    const customer = await Customer.findOrFail(params.Customer_id);
    customer.Customer_name=request.input("Customer_name")
    await customer.save();
    return response.json(customer);

  }

  public async destroy({ response, params }: HttpContextContract) {
    const customer = await Customer.find(params.Customer_id);
    await customer?.delete();
    return response.json(customer);
  }
}  