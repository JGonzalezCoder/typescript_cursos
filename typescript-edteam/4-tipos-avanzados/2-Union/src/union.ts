class ErrorResponse {
    code: number = 404;
}

class SuccessResponse {
    code : number = 200;
    response: string = "";
}

type Requesr = ErrorResponse | SuccessResponse;

const get = (req: Request) => {
    // Aca puedo usar fetch...
}