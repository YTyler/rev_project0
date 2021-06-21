import { DieIF } from '../entities/Die';
import { ddbClient } from "../../db/ddbClient";
import { GetItemCommand, GetItemCommandInput, GetItemCommandOutput } from '@aws-sdk/client-dynamodb';


export interface DieDaoIF {
    getAll: () => Promise<DieIF[]>;
    getOne: (id: string) => Promise<GetItemCommandOutput| null>;
}

export default class DieDao implements DieDaoIF {
    private TABLE_NAME = "DICE_TABLE"
    public getAll(): Promise<DieIF[]> {
        
        return Promise.resolve([])
    }

    //GET a single dice based on its id
    public async getOne(id: string): Promise<GetItemCommandOutput | null> {
        // Set the parameters
        const params: GetItemCommandInput = {
            TableName: this.TABLE_NAME,
            Key: {
                id: { N: id},
            },
        };
        const data = await ddbClient.send(new GetItemCommand(params));
        console.log("Success", data.Item);
        return data;
    }
}