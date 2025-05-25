import { IUser } from '@/interfaces/User';


export const loginAdapter = async (id: number): Promise<IUser | null> => {
    const response = await fetch("/data/users.json");

    const data = await response.json();
    const user = data.find((user: IUser) => user.id === id);

    return user || null;
}