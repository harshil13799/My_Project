import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Orders extends BaseSchema {
  protected tableName = 'orders'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('Order_no').primary()


      table.date('Order_date').notNullable()
      table.float('Total_amount').notNullable()
      table.integer('Customer_id').unsigned().notNullable().references('Customer_id').inTable('customers')
      table.timestamps(true,true);
      // table.timestamp('created_at', { useTz: true })
      // table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}