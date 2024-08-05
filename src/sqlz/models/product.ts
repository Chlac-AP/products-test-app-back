import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Optional } from "sequelize";
import sequelize from "./_index";


export class Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> {
  declare id: CreationOptional<number>;
  declare code: string;
  declare name: string;
  declare description: string;
  declare price: number;
  declare quantity: number;
  //declare inventoryStatus: string;
  declare category: string;
  declare image?: string;
  declare rating?: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  inventoryStatus(): string {
    return this.quantity > 0 ? this.quantity > 10 ? 'INSTOCK' : 'LOWSTOCK' : 'OUTOFSTOCK'
  }

  static createCode(): string {
    let code = '';
    var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 9; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    code: {
      type: new DataTypes.STRING(9),
      allowNull: false
    },
    name: {
      type: new DataTypes.STRING(42),
      allowNull: false
    },
    description: {
      type: new DataTypes.STRING(128),
      allowNull: true
    },
    price: {
      type: new DataTypes.DECIMAL(2, 10),
      allowNull: true
    },
    quantity: {
      type: new DataTypes.INTEGER,
      allowNull: true
    },
    /*inventoryStatus: {
      type: new DataTypes.ENUM('INSTOCK', 'LOWSTOCK', 'OUTOFSTOCK'),
      allowNull: true
    },*/
    category: {
      type: new DataTypes.STRING(128),
      allowNull: true
    },
    image: {
      type: new DataTypes.STRING(128),
      allowNull: true
    },
    rating: {
      type: new DataTypes.TINYINT,
      allowNull: true
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: 'products',
    sequelize
  }
);