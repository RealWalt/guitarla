import { Model, DataTypes, Optional, InferAttributes, InferCreationAttributes } from 'sequelize';
import sequelize from '../db';

class Product extends Model<InferAttributes<Product>, InferCreationAttributes<Product>> {
  declare id: number;
  declare name: string;
  declare image: string;
  declare description: string | null;
  declare price: number;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'products',
    timestamps: false,
  }
);

export default Product;
