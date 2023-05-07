export interface User {
    user_id: string;
    username: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
    picture_id: string;
    created_at: Date;
    updated_at: Date;
    favorite_characters?: Array<string>;
}