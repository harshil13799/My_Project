 import Application from '@ioc:Adonis/Core/Application';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'

export default class CategoriesController {
  public async index ({response}: HttpContextContract) {
    const cat = await Category.all();
    return response.json(cat)
  }

  public async create({ request, response }: HttpContextContract) {
    const Cat_img = request.file('Cat_img')
    if (Cat_img) {
      const imageName =
        new Date().getTime().toString() + `.${Cat_img.extname}`;
      await Cat_img.move(Application.publicPath("images"), {
        name: imageName,
      });
      const cat = new Category();
      cat.Cat_img = `${imageName}`;
       cat.save()
      return response.json( cat );
    }  
  }

  public async store ({}: HttpContextContract) {
  }

  public async show ({response,params}: HttpContextContract) {
    const cat = await Category.findOrFail(params.Cat_id);
    return response.json(cat);
  }

  public async edit ({}: HttpContextContract) {
  }

  public async update ({request,params,response}: HttpContextContract) {
    const cat = await Category.findOrFail(params.Cat_id);
    const Cat_img = request.file('Cat_img')
    if (Cat_img) {
      const imageName =
        new Date().getTime().toString() + `.${Cat_img.extname}`;
      await Cat_img.move(Application.publicPath("images"), {
        name: imageName,
      });
      
      cat.Cat_img = `${imageName}`;
       cat.save()
      return response.json( cat );
    }  
  
  }

  public async destroy ({params,response}: HttpContextContract) {
    const cat = await Category.findOrFail(params.Cat_id);
    cat.delete();
    return response.json("Delete Sucessfull");
  }
}
