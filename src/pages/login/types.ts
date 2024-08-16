export interface user {
    id: string;
    email: string;
    lastName: string;
    firstName: string;
    username: string;
    avatarUrl: string;
    dateOfBirth?: string;
    gender?: string;
    phoneNumber?: number;
    material?: string;
    accessToken: string;
    refreshToken: string;
    role: role;
}

export interface role{
    id: string;
    name: string;
    code: string;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
}