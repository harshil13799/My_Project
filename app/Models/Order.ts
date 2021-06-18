import { DateTime } from 'luxon'
import { BaseModel, column, hasOne,HasOne} from '@ioc:Adonis/Lucid/Orm'
import Customer from './Customer'


export default class Order extends BaseModel {
  @column({ isPrimary: true ,columnName:'Order_no'})
  public Order_no: number

  @column.dateTime({columnName:'Order_date',autoCreate: true})
  public Order_date:DateTime

  @column({columnName:'Total_amount'})
  public Total_amount:number

  @hasOne(()=>Customer,{
    foreignKey:'Customer_id'
  })
  @column({columnName:'Customer_id'})
  public Customer_id:HasOne<typeof Customer>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime



}