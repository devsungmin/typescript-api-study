import { Model, DataTypes, Association, BuildOptions, Sequelize } from 'sequelize';
import ReviewInterface from '../interface/review.interface';

export class Review extends Model<ReviewInterface>{
    public id?: number;
    public title!: string;
    public post!: string;
    public password!: string;
    public isPublic!: boolean;
    public productId!: number;
    public userId!: number;

    public static associations: {
        reviewHasManyScores: Association<Review>;
    }
}

export type ReviewStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): Review
}

export function ReviewFactor(sequelize: Sequelize): ReviewStatic {
    return <ReviewStatic>sequelize.define("review", {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        post: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        isPublic: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}