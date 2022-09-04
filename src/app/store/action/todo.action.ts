

export const SUCCESS = "success"
export const ERROR = "errors"
export const LOAD = "loading"



// ACtion With Payload
export class LoadAction {
    type  = LOAD
}


export class SuccessAction{
    type  = SUCCESS
    payload : any;
    constructor (payload : any){
        this.payload = payload;
    }

}


export class ErrorAction{
    type  = ERROR
    payload : any;
    constructor (payload : any){
        this.payload = payload;
    }

}