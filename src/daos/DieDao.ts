import { DieIF } from '../entities/Die';
import { ddbClient } from "../../db/ddbClient";
import { GetItemCommand, GetItemCommandInput } from '@aws-sdk/client-dynamodb';


export interface DieDaoIF {
    getAll: () => Promise<DieIF[]>;
    getOne: (id: string) => Promise<DieIF | null>;
}

export default class DieDao implements DieDaoIF {
    private TABLE_NAME = "DICE_TABLE"
    public getAll(): Promise<DieIF[]> {
        
        return Promise.resolve([])
    }

    public getOne(id: string): Promise<DieIF> | null {
        // Set the parameters
        const params: GetItemCommandInput = {
            TableName: this.TABLE_NAME,
            Key: {
                KEY_NAME: { N: id},
            },
        };
        const run = async () => {
            const data = await ddbClient.send(new GetItemCommand(params));
            console.log("Success", data.Item);
            return data;
        };



        return Promise.resolve(null);
    }
}