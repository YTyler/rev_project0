// Import required AWS SDK clients and commands for Node.js
import { CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./ddbClient.js";

// Set the parameters
const params = {
    AttributeDefinitions: [
        {   //Partition Key Type
            AttributeName: "id", 
            AttributeType: "S", 
        },
        // {   //Sort Key Type
        //     AttributeName: "owner",
        //     AttributeType: "S",
        // },
    ],
    KeySchema: [
        {   //Partition Key
            AttributeName: "id",
            KeyType: "HASH",
        },
        // {   //Sort Key
        //     AttributeName: "owner",
        //     KeyType: "RANGE",
        // },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
    },
    TableName: "DICE_TABLE", //TABLE_NAME
    StreamSpecification: {
        StreamEnabled: false,
    },
};

const run = async () => {
    try {
        const data = await ddbClient.send(new CreateTableCommand(params));
        console.log("Table Created", data);
        return data;
    } catch (err) {
        console.log("Error", err);
    }
};
run();
