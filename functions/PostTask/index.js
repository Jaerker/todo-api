const {successResponse, errorResponse} = require('../../responses/index');
const { agent } = require('../../utils/agent');

exports.handler = async (event) => {
    const {task} = JSON.parse(event.body)

    if(task){

        await agent.createTask(task);

        return successResponse('Successfully created task');    
    }
    return errorResponse(400, 'No "task" found in body');
}