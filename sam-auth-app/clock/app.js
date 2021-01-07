
let response;
exports.lambdaHandler = async (event, context) => {
    console.log(event)
    response = {
        'statusCode': 200,
        'body': JSON.stringify({
            message: 'Boom!!!',
        })
    }
    return response
}
