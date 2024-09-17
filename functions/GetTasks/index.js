const {successResponse, errorResponse} = require('../../responses/index');
const {agent} = require('../../utils/agent');

exports.handler = async (event) => {
    var tasks = await agent.getTasks();
    
    return successResponse(tasks);
}