import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { User } from "@/models/user.model";

interface UserListProps {
    users: User[];
}

/**
 *
 * @param primary {boolean} shows primary coloring when true, otherwise shows secondary
 * @returns
 */
export const UserList = ({ users }: UserListProps) => {
    return (
        <div className="w-[640px] shadow rounded p-4 bg-neutral-100 min-h-64">
            <h1 className="text-3xl font-bold">Users</h1>
            <hr />
            <div className="pt-4">
                {users.map((user: User) => (
                    <div key={user.username} className="inline-block w-1/2">
                        {user.username}
                    </div>
                ))}
            </div>
        </div>
    );
};
