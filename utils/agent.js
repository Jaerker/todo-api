const { DynamoDB } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocument } = require('@aws-sdk/lib-dynamodb');
const { v4: uuid } = require('uuid');

const client = new DynamoDB();
const db = DynamoDBDocument.from(client);

const createId = () => uuid().substring(0, 6);

exports.agent = {
    getTasks: async () => {
        const {Items} = await db.query({
			TableName: 'todo-db',
			KeyConditionExpression: 'pk = :pk',
			ExpressionAttributeValues: {
				':pk': 'task',
			},
		});
        return Items;
    },
    getTask: async (sk) => {
        const {Item} = await db.get({
            TableName: 'todo-db',
            Key: {
                pk: 'task',
                sk: sk,
            },
        });
        return Item;
    },
    createTask: async (task) => await db.put({
        TableName: 'todo-db',
        Item: {
            pk: 'task',
            sk: createId(),
            task: task,
            done: false
        },
    }),
    updateTask: async (data) => await db.put({
        TableName: 'todo-db',
        Item: {
            pk: 'task',
            sk: data.sk,
            task: data.task,
            done: data.done
        },
    }),
    deleteTask: async (sk) => await db.delete({
        TableName: 'todo-db',
        Key: {
            pk: 'task',
            sk: sk
        }
    })
    
    

}