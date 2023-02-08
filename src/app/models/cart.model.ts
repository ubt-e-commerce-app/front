export interface ICart {
    customerId: number;
    cartItems: ICartItem[];
    id: number;
}

export interface ICartItem {
    productId: number;
    price: number;
}

export interface IAddCartItem {
    customerId: number;
    productId: number;
    productPrice: number;
}

export interface IAddCartItemResponse {
    message: string;
    data: any;
}

export interface IRemoveCartItemResponse {
    message: string;
    data: any;
}