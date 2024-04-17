function parseBody(req, callback) {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("error", (error) => {
        callback(error, null);
    });
  }