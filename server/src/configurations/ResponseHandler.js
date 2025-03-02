class ResponseHandler {
    constructor() {
        this.data = [];
        this.message = "Success";
        this.error = null;
    }

    setData(data) {
        this.data = data;
        return this;
    }

    setMessage(message) {
        this.message = message;
        return this;
    }

    setError(error) {
        this.error = error;
        return this;
    }
}

module.exports = ResponseHandler;
