class ErrorResponse {
    code: number = 404;
}

class SuccessResponse {
    code : number = 200;
    response: string = "";
}

type TRequest = ErrorResponse | SuccessResponse;

interface Res {
    data: any;
    code: number;
}

async function get(req: TRequest): Promise<Res> {
    let res: Res = {
        data: null,
        code: 500
    }
    try {
        const data = await fetch("https://...");
        if(data) {
            if(req instanceof SuccessResponse) {
                res = {
                    data,
                    code: req.code
                }
            }
        } else if(req instanceof ErrorResponse) {
            res = {
                data,
                code: req.code
            }
        }            
    } catch (error) {
        console.error(error);
    } finally {
        return res;
    }
}