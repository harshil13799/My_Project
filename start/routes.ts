import Route from '@ioc:Adonis/Core/Route';
import Application from '@ioc:Adonis/Core/Application';




// Route.get('/', async ({ view }) => {
//   return view.render('welcome')
// })

// customer
Route.get('/getuser','CustomersController.index')
Route.post('/addcustomer','CustomersController.create')
Route.get('/getcustomer/:Customer_id','CustomersController.show')
Route.delete('/deletecustomer/:Customer_id','CustomersController.destroy')
Route.put('/editcustomer/:Customer_id','CustomersController.update')
Route.get('/getname/:Customer_name','CustomersController.store');

// product
Route.get('/getproduct','ProductsController.index')
Route.post('/addproduct','ProductsController.create')
Route.get('/getproduct/:Product_id','ProductsController.show')
Route.delete('/deleteproduct/:Product_id','ProductsController.destroy')
Route.put('/editproduct/:Product_id','ProductsController.update')

// order
Route.get('/getorder','OrdersController.index');
Route.post('/addorder','OrdersController.create')
Route.get('/getorder/:Order_no','OrdersController.show')
Route.delete('/deleteorder/:Order_no','OrdersController.destroy')
Route.put('/updateorder/:Order_no','OrdersController.update')
Route.get('/customerorder/:Customer_id','OrdersController.getuserorder')
Route.get('/order/:Customer_id','OrdersController.getusername');
Route.get('/pagedata/:page/:limit','OrdersController.paginateData');



// order items
Route.post('/addorderitems','OrderitemsController.create')
Route.get('/getorderitem','OrderitemsController.index')
Route.delete('/deleteorderitem/:Order_itemno','OrderitemsController.destroy')
Route.get('/getorderitem/:Order_itemno','OrderitemsController.show')
Route.put('/editorderitem/:Order_itemno','OrderitemsController.update')

// category
Route.post('/addcat','CategoriesController.create');
Route.get('/getcat','CategoriesController.index');
Route.delete('/deletecat/:Cat_id','CategoriesController.destroy');
Route.get('/getcat/:Cat_id','CategoriesController.show');
Route.put('/editcat/:Cat_id','CategoriesController.update');

// user

Route.post('/signup','UsersController.create');
Route.get('/user','UsersController.index');

// practice
Route.post('posts', async ({ request,response }) => {
  const coverImage = request.file('cover_image')

  if (coverImage) {
    await coverImage.move(Application.publicPath('images'));
    response.json('Sucess');
  }
})


