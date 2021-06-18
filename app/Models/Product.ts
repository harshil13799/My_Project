import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Product extends BaseModel {
  @column({ isPrimary: true, columnName: 'Product_id' })
  public Product_id: number;

  @column({ columnName: 'Product_name' })
  public Product_name: string;

  @column({ columnName: 'Product_price' })
  public Product_price: number;


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}