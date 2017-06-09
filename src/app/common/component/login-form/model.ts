export interface ILogin {
	response: any;
	token: string;
	message: {};
	loading: boolean;
}

export interface ILoginMessage {
	type: string;
	text: string;
}
