import { UserIF } from '../entities/User';
import { ddbDocClient} from '../../db/ddbDocClient';
import { GetCommand, PutCommand, DeleteCommand, ServiceOutputTypes } from '@aws-sdk/lib-dynamodb';

export interface UserDaoIF {
    getOne: (id: number) => Promise<ServiceOutputTypes | null>;
    add: (body: UserIF) => Promise<void>;
    delete: (id: number) => Promise<void>;
}

export default class UserDao implements UserDaoIF {
    private TABLE_NAME = "PROJECT0_TABLE";

    //GET (read) a single user based on its id
    public async getOne(id_value: number): Promise<ServiceOutputTypes | null> {
        const params = {
            TableName: this.TABLE_NAME,
            Key: {
                type: "User",
                id: id_value,
            },
        };
        try {
            const data = await ddbDocClient.send(new GetCommand(params));
            console.log("Successfully Read", data);
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    //POST (Create) a user
    public async add(body: UserIF): Promise<void> {
        const params = {
            TableName: this.TABLE_NAME,
            Item: {
                type: "User",
                id: body.id,
                name: body.name,
                email: body.email,
            },
        };
        try {
            const data = await ddbDocClient.send(new PutCommand(params));
            console.log("Item Added Successfully", data);
        } catch (err) {
            console.log(err);
        }
    }
    //DELETE a user
    public async delete(id_value: number): Promise<void> {
        const params = {
            TableName: this.TABLE_NAME,
            Key: {
                type: "User",
                id: id_value,
            },
        };
        try {
            const data = await ddbDocClient.send(new DeleteCommand(params));
            console.log("Item Successfully Deleted");
        } catch (err) {
            console.log("Error", err);
            return err;
        }
    }
}