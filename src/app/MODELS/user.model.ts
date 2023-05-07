export interface User {
    username: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
    picture_id: string;
    favorite_characters?: Array<string>;
}