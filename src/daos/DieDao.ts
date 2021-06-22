import { DieIF } from '../entities/Die';
import { ddbDocClient } from "../../db/ddbDocClient";
import { GetCommand, PutCommand,  ServiceOutputTypes } from '@aws-sdk/lib-dynamodb';


export interface DieDaoIF {
    getAll: () => Promise<DieIF[]>;
    getOne: (id: number) => Promise<ServiceOutputTypes | null>;
    add: (body: DieIF) => Promise<void>;
    // update: (id_value:number, die: DieIF) => Promise<void>;
    delete: (id: string) => Promise<void>;
}

export default class DieDao implements DieDaoIF {
    private TABLE_NAME = "DICE_TABLE";

    public getAll(): Promise<DieIF[]> {
        
        return Promise.resolve([])
    }

    //GET (read) a single die based on its id
    public async getOne(id_value: number): Promise<ServiceOutputTypes | null> {
        // Set the Command parameters
        const params = {
            TableName: this.TABLE_NAME,
            Key: {
                id: id_value,
            },
        };
        try {
        const data = await ddbDocClient.send(new GetCommand(params));
        console.log("Success", data);
        return data;
        } catch (err) {
            console.log(err);
        }
    }

    //POST (Create) a die
    public async add(body: DieIF): Promise<void> {
        const params = {
            TableName: this.TABLE_NAME,
            Item: {
                id: body.id,
                owner: body.owner,
                rolls: body.rolls,
                sides: body.sides,
            },
        };
        try {
            const data = await ddbDocClient.send(new PutCommand(params));
            console.log("Item Added Successfully", data);
        } catch (err) {
            console.log(err);
        }
    }

    // //PUT (update) a die
    // public async update(id_value: number, body: DieIF): Promise<void> {
    //     const die = this.getOne(id_value);
    //     let conditionalUpdateExpression = `${}`;
    //     (!body.id) ? 
    //     const params = {
    //         TableName: this.TABLE_NAME,
    //         Key: {
    //             id: id_value,
    //         },
    //         UpdateExpresssion:
    //     };
    //     return Promise.resolve(undefined);
    // }

    //DELETE a die
    public async delete(id: string): Promise<void> {
        // TODO
        return Promise.resolve(undefined);
    }
}