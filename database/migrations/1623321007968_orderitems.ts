
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Orderitems extends BaseSchema {
  protected tableName = 'orderitems'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('Order_itemno').primary()


       table.integer('Order_no ').unsigned().notNullable().references('Order_no').inTable('orders')
       table.integer('Product_id ').unsigned().notNullable().references('Product_id').inTable('products')
       table.integer('Quantity').notNullable()
       table.float('Price_per_item').notNullable()
       table.float('Amount ').notNullable()
       table.timestamps(true,true);
      // table.timestamp('created_at', { useTz: true })
      // table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}