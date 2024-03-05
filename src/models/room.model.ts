import { User } from "./user.model";

export type Room = {
    roomcode: string;
    users: User[];
};
