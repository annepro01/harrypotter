const DynamoDB = require('aws-sdk/clients/dynamodb');
require('dotenv').config();




const dynamoClient = new DynamoDB.DocumentClient({region: 'us-east-1'});

const TABLE_NAME = "harrypotter-api";

const getCharacters = async () => {
    const params = {
        TableName: TABLE_NAME
    };

    const characters = await dynamoClient.scan(params).promise();
    console.log(characters)
    return characters
}

const addOrUpdateCharacters = async (character) => {
    const params = {
        TableName: TABLE_NAME,
        Item: character
    }
    await dynamoClient.put(params).promise();
}


// getCharacters();

const hp =  {"id": "0","name":"Harry Potter","alternate_names":["The Boy Who Lived","The Chosen One"]}

addOrUpdateCharacters(hp);