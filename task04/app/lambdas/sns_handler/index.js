exports.handler = async (event) => {
    console.log("Received SNS events:", JSON.stringify(event));
    return {
        statusCode: 200,
        body: "Success"
    };
};