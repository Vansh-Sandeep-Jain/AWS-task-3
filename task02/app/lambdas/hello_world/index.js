exports.handler = async (event) => {
    const path = event.rawPath; // Path of the request
    const method = event.requestContext.http.method; // HTTP method

    if (path === "/hello" && method === "GET") {
        // Success: Respond to the /hello GET endpoint
        return {
            statusCode: 200,
            message: "Hello from Lambda",
        };
    } else {
        // Handle invalid endpoints or methods
        return {
            statusCode: 400,
            message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`
        }
    }
};
