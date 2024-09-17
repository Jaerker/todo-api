exports.successResponse = (body) => {
    return {
        statusCode: 200,
        body: JSON.stringify(body)
    }
}


exports.errorResponse = (statusCode, errorMessage) => {
    return {
        statusCode: statusCode,
        error: JSON.stringify(errorMessage)
    }
}