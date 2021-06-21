import { DieIF } from '../entities/Die';
import { ddbClient } from "../../db/ddbClient";
import { GetItemCommand, GetItemCommandInput, GetItemCommandOutput, PutItemCommand, PutItemCommandInput } from '@aws-sdk/client-dynamodb';


export interface DieDaoIF {
    getAll: () => Promise<DieIF[]>;
    getOne: (id: string) => Promise<GetItemCommandOutput | null>;
    add: (die: DieIF) => Promise<void>;
    update: (die: DieIF) => Promise<void>;
    delete: (id: string) => Promise<void>;
}

export default class DieDao implements DieDaoIF {
    private TABLE_NAME = "DICE_TABLE";

    public getAll(): Promise<DieIF[]> {
        
        return Promise.resolve([])
    }

    //GET (read) a single die based on its id
    public async getOne(id: string): Promise<GetItemCommandOutput | null> {
        // Set the Command parameters
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

    //POST (Create) a die
    public async add(die: DieIF): Promise<void> {
        const params: PutItemCommandInput = {
            TableName: this.TABLE_NAME,
            Item: {
                id: {N: die.id.toString()},
                owner: {S: die.owner},
                rolls: {NS: die.rolls.map((e) => e.toString())},
                sides: {S: die.sides},
            },
        };
        try {
            const data = await ddbClient.send(new PutItemCommand(params));
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    //PUT (update) a die
    public async update(die: DieIF): Promise<void> {
        // TODO
        return Promise.resolve(undefined);
    }

    //DELETE a die
    public async delete(id: string): Promise<void> {
        // TODO
        return Promise.resolve(undefined);
    }
}