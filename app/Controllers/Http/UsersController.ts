import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/user';

export default class UsersController {
  public async index ({response}: HttpContextContract) {
    const user = await User.all();
    return response.json(user);
  }

  public async create ({request,response}: HttpContextContract) {
    const user = new User ();
    user.email=request.input("email");
    user.password=request.input("password");
    await user.save();
    return response.json(user);
  }

  public async store ({}: HttpContextContract) {
  }

  public async show ({}: HttpContextContract) {
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
