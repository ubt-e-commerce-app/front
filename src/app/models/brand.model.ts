export interface IBrand {
    id?: number;
    name?: string;
    logo?: string;
    shortName?: string;
}

interface IResponse {
    message: string;
}

export interface IGetBrandsResponse extends IResponse {
    data: IBrand[];
}

export interface IGetBrandResponse extends IResponse {
    data: IBrand;
}

export interface ICreateBrandResponse extends IResponse {
    data: boolean;
}

export interface IDeleteResponse extends IResponse {
    data: boolean;
}
