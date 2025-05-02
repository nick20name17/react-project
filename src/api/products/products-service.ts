import { api } from "../api";
import { Product, ProductPayload, UpdateProductPayload } from "./production-types";

export const getProducts = async () => {
    const {data} = await api.get<Product[]>('/products');
    return data;
};

export const getProduct = async (id: string) => {
    const {data} = await api.get<Product>(`/products/${id}`);
    return data;
};

export const createProduct = async (payload: ProductPayload) => {
    const {data} = await api.post('/products', payload);
    return data;
};

export const updateProduct = async (id: number, payload: UpdateProductPayload) => {
    const {data} = await api.put(`/products/${id}`, payload);
    return data;
};


export const deleteProduct = async (id: number) => {
    const {data} = await api.delete(`/products/${id}`);
    return data;
};