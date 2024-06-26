"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponse = exports.HttpStatus = void 0;
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["Bad_Request"] = 400] = "Bad_Request";
    HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatus[HttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpStatus || (exports.HttpStatus = HttpStatus = {}));
class HttpResponse {
    Ok(res, data) {
        return res
            .status(HttpStatus.OK)
            .json({ status: HttpStatus.OK, statusMsg: 'Success', data: data });
    }
    BadRequest(res, data) {
        return res
            .status(HttpStatus.Bad_Request)
            .json({
            status: HttpStatus.Bad_Request,
            statusMsg: 'Bad request',
            error: data
        });
    }
    NotFound(res, data) {
        return res.status(HttpStatus.NOT_FOUND).json({
            status: HttpStatus.NOT_FOUND,
            statusMsg: 'Not found',
            error: data
        });
    }
    Unauthorized(res, data) {
        return res.status(HttpStatus.UNAUTHORIZED).json({
            status: HttpStatus.UNAUTHORIZED,
            statusMsg: 'Unauthorized',
            error: data
        });
    }
    Forbidden(res, data) {
        return res.status(HttpStatus.FORBIDDEN).json({
            status: HttpStatus.FORBIDDEN,
            statusMsg: 'Forbidden',
            error: data
        });
    }
    InternalServerError(res, data) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            statusMsg: 'Internal Server Error',
            error: data
        });
    }
}
exports.HttpResponse = HttpResponse;
