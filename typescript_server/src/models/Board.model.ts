import { Model, DataTypes, Association, BuildOptions, Sequelize } from 'sequelize';
import boardInterface from '../interface/board.interface';

export class Board extends Model<boardInterface> {
    public title!: string;
    public writer!: string;
    public createDate!: Date;
    public updateDate!: Date;

    public static associations: {
        boardHasManyScores: Association<Board>;
    }
}

export type BoardStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): Board;
}

export function BoardFactor(sequelize: Sequelize): BoardStatic {
    return <BoardStatic>sequelize.define("board", {
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        writer: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        createDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updateDate: {
            type: DataTypes.DATE,
            allowNull: true
        }
    })
}