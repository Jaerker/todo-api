const {successResponse, errorResponse} = require('../../responses/index');
const { agent } = require('../../utils/agent');

exports.handler = async (event) => {
    const {sk} = event.pathParameters;
    const item = await agent.getTask(sk);
    if(item)
        return successResponse(item);    
    return errorResponse(404, `task with sk: ${sk} was not found`);    

}