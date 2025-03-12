exports.handler = async (event) => {
    console.log("Received events from SQS:", JSON.stringify(event));
    return {
        statusCode: 200,
        body: "Success"
    };
};