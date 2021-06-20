import { Sequelize } from 'sequelize';
import { config } from '../config/config';
import { UserFactor } from './User.model';
import { BoardFactor } from './Board.model';
import { SellerFactor } from './Seller.model';
import { ProductFactor } from './Product.model';
import { ReviewFactor } from './Review.model';

export const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        host: config.development.host,
        dialect: 'mysql',
        define: {
            timestamps: false
        },
        timezone: "+09:00",
    }
)

export const User = UserFactor(sequelize)
export const Board = BoardFactor(sequelize)
export const Seller = SellerFactor(sequelize)
export const Product = ProductFactor(sequelize)
export const Review = ReviewFactor(sequelize)

// Product.belongsTo(Seller, {
//     foreignKey: "sellerId",
//     as: "seller"
// })

Seller.hasMany(Product, {
    sourceKey: 'id',
    foreignKey: 'sellerId',
    as: 'products'
})