const {successResponse, errorResponse} = require('../../responses/index');
const { agent } = require('../../utils/agent');

exports.handler = async (event) => {
    const {sk} = event.pathParameters;
    const response = await agent.deleteTask(sk);
    return successResponse(response);    

}