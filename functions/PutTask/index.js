const {successResponse, errorResponse} = require('../../responses/index');
const { agent } = require('../../utils/agent');

exports.handler = async (event) => {

    const {task} = JSON.parse(event.body);
    const {sk} = event.pathParameters;
    if(task && sk){
        if(task.sk !== sk)
            return errorResponse(400, 'SK and task SK does not match');

        await agent.updateTask(task);

        return successResponse('Successfully updated task');    

    }
    return errorResponse(404, 'Task object not found in body');    


}