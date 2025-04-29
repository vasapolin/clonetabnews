export class InternalServerError extends Error {
  constructor(message) {
    super(message || "An unexpected internal error occurred.", {
      name: "InternalServerError",
    });
    this.name = "InternalServerError";
    this.status = 500;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.status,
    };
  }
}

export class ServiceUnavailableError extends Error {
  constructor(message) {
    super(message || "Service unavailable at the moment.", {
      name: "ServiceUnavailableError",
    });
    this.name = "ServiceUnavailableError";
    this.status = 503;
    this.action = "Check if the service is available.";
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.status,
    };
  }
}

export class ValidationError extends Error {
  constructor(message) {
    super(message || "A validation error occurred.", {
      name: "ValidationError",
    });
    this.name = "ValidationError";
    this.status = 400;
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.status,
    };
  }
}

export class NotFoundError extends Error {
  constructor(message, action) {
    super(message || "Could not find this resource in the system.", {
      name: "NotFoundError",
    });
    this.name = "NotFoundError";
    this.status = 404;
    this.action =
      action || "Check if the parameters sent in the query are correct.";
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.status,
    };
  }
}

export class MethodNotAllowedError extends Error {
  constructor() {
    super("Method not allowed for this endpoint.");
    this.name = "MethodNotAllowedError";
    this.status = 405;
    this.action =
      "Check if the HTTP method sent is valid for this endpoint.";
  }

  toJSON() {
    return {
      name: this.name,
      message: this.message,
      action: this.action,
      status_code: this.status,
    };
  }
}
