import { Model, DataTypes, Association, BuildOptions, Sequelize } from 'sequelize';
import productInterface from '../interface/product.interface';

export class Product extends Model<productInterface> {
    public id?: number;
    public name!: string;
    public price!: number;
    public category!: string;
    public sellerId!: number;
    public salePrice!: number;

    public static associations: {
        productHasManyScores: Association<Product>;
    }
}

export type ProductStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): Product
}

export function ProductFactor(sequelize: Sequelize): ProductStatic {
    return <ProductStatic>sequelize.define("product", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        sellersId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        salePrice: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    })
}