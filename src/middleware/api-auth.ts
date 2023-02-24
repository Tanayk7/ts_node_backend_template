import { Request, Response, NextFunction } from 'express';
import { InternalServerError, NotAuthorizedError } from '../errors';

export const apiAuth = async (req: Request, res: Response, next: NextFunction) => { 
    console.log("req headers", req.headers);

    const api_key = req.headers['X-API-KEY'];

    if(!api_key){
        throw new NotAuthorizedError();
    }

    try{ 
         // verify the api key provided 
    }   
    catch (err) {
        throw new InternalServerError();
    }

    next();
}   
