const middleware = async (req) => {
    console.log("middleware", req.url);
}

export default middleware;