export interface staff {
    id: string;
    email: string;
    last_name: string;
    first_name: string;
    username: string;
    avatar_url: string;
    date_of_birth?: string;
    gender?: string;
    phone_number?: number;
    material?: string;
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