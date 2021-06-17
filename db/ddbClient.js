import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
//set AWS Region
const REGION = "us-west-2";
//Create DynamoDB client object
const ddbClient = new DynamoDBClient({ region: REGION });
export { ddbClient };