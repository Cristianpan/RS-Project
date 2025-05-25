import { IUser } from '@/interfaces/User';
export const getUsersAdapter = async (): Promise<IUser[]> => {
    const response = await fetch("/data/users.json");

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    return data;
}