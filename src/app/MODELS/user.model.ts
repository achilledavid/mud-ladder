export interface User {
    user_id: string;
    username: string;
    password: string;
<<<<<<< Updated upstream
    email?: string;
    first_name?: string;
    last_name?: string;
    profile_picture?: string;
    created_at?: string;
    updated_at?: string;
=======
    email: string;
    first_name: string;
    last_name: string;
    picture_id: string;
    created_at: Date;
    updated_at: Date;
>>>>>>> Stashed changes
    favorite_characters?: Array<string>;
}