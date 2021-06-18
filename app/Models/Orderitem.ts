import { DateTime } from "luxon";
import { BaseModel, column, hasOne, HasOne } from "@ioc:Adonis/Lucid/Orm";
import Order from "./Order";
import Product from "./Product";

export default class Orderitem extends BaseModel {
  @column({ isPrimary: true, columnName: "Order_itemno" })
  public Order_itemno: number;

  @hasOne(() => Order, {
    foreignKey: "Order_no",
  })
  @column({ columnName: "Order_no" })
  public Order_no: HasOne<typeof Order>;

  @hasOne(() => Product, {
    foreignKey: "Product_id",
  })
  @column({ columnName: "Product_id" })
  public Product_id: HasOne<typeof Product>;

  @column({ columnName: "Quantity" })
  public Quantity: number;

  @column({ columnName: "Price_per_item" })
  public Price_per_item: number;

  @column({ columnName: "Amount" })
  public Amount: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}