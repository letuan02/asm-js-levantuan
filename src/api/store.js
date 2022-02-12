import instance from "./config";

const TABLE_NAME = "store";

export const getAll = () => {
    const url = `/${TABLE_NAME}`;
    return instance.get(url);
};

export const get = (id) => {
    const url = `/${TABLE_NAME}/${id}`;
    return instance.get(url);
};

export const add = (data) => {
    const url = `/${TABLE_NAME}`;
    return instance.post(url, data);
};

export const remove = (id) => {
    const url = `/${TABLE_NAME}/${id}`;
    return instance.delete(url);
};

export const update = (id, data) => {
    const url = `/${TABLE_NAME}/${id}`;
    return instance.patch(url, data);
};

export const search = (keyword) => {
    const url = `/${TABLE_NAME}/?name_like=${keyword}`;
    return instance.get(url);
};