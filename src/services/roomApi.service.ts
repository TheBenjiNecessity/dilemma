import { get, patch, post } from "./restApi.service";

const SOCKET_SERVER_URL = "http://localhost:4000"; // TODO put in env file

export const getRoom = (roomcode: string) => {
    return get(`${SOCKET_SERVER_URL}/rooms/${roomcode}`);
};

export const addUser = (roomcode: string, username: string) => {
    return patch(`${SOCKET_SERVER_URL}/rooms/${roomcode}/${username}`, null);
};

export const createRoom = () => {
    return post(`${SOCKET_SERVER_URL}/rooms`, null);
};
