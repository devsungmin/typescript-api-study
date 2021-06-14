import { Model, DataTypes, Association, BuildOptions, Sequelize } from 'sequelize';
import sellerInterface from '../interface/seller.interface';

export class Seller extends Model<sellerInterface> {
    public id?: number;
    public companyName!: string;
    public ceoName!: string;
    public address!: string;
    public phomeNameber!: string;
    public registrationImg!: string;

    public static associations: {
        sellerHasManyScores: Association<Seller>;
    }
}

export type SellerStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): Seller
}

export function SellerFactor(sequelize: Sequelize): SellerStatic {
    return <SellerStatic>sequelize.define("seller", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        companyName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        ceoName: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        address: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        phoneNumber: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
        registrationImg: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    })
}