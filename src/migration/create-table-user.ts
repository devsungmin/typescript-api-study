import { User } from '../models/User.model';

const create_table_user = async () => {
    await User.sync({ force: true })
        .then(() => {
            console.log("create User Table");
        }).catch((err) => {
            console.log("Error create User Table: ", err);
        })
}

create_table_user();