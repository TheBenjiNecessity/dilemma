import { User } from "./user.model";

enum ROOM_STATE {
    LOBBY,
    BEFORE_FIRST_CHALLENGE,
    FIRST_CHALLENGE,
    BEFORE_SECOND_CHALLENGE,
    SECOND_CHALLENGE,
    BEFORE_VOTING,
    VOTING,
    VOTING_RESULTS,
}

export type Room = {
    roomcode: string;
    state: string; // TODO enum to tract if in challenge, voting, etc
    users: User[];
};
