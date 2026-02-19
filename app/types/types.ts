export interface ITable {
	id: string;
	title: string;
	description: string;
	url: string;
}

export interface IResource {
	id: string;
	title: string;
	urls: {
		name: string;
		url: string;
	}[];
}