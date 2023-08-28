export type IPost = {
	_id: string;
	title: string;
	subtitle?: string;
    description: string;
    author: string;
    date: string;
    image: string;
};

export type IUser = {
	_id: string;
	name: string;
	email?: string;
    password: string;
    avatar: string;
};