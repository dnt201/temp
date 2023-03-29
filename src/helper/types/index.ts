//-- Start: Em Nhã setup --
export enum APIStatus { IDLE,PENDING, REJECTED, FULFILLED}
export type APIError = {message:string,code:number}
export type APIData<T> = {
	status:APIStatus,
	error?:APIError,
	data?:T
}

export type QueryType<T> = {
	page?: number;
	records?: number;
	searchField?: keyof T;
	searchValue?: string;
	sortBy?: keyof T;
	sortOrder?: 'asc' | 'desc';
};

export type PagingType = {
	pageIndex: number;
	itemsPerPage: number;
	currentItemCount: number;
	totalItems: number;
};

// export type SliceStateType<T> = {
// 	list: Array<T>;
// 	status: RequestStateType;
// 	error?: string;
// 	paging: PagingType;
// 	query: QueryType<T>;
// };
//-- End: Em Nhã setup --




// export type RequestStateType =
// 	| 'IDLE'
// 	| 'PENDING'
// 	| 'FULFILLED'
// 	| 'REJECTED'
// 	| 'FAILED';
// export interface OptionsItemType {
// 	label: string;
// 	value: string;
// 	isDisabled?: boolean;
// }

// export type OptionsItemArrayType = Array<OptionsItemType>;


// export type ListResponseType<T> = PagingType & {
// 	items: Array<T>;
// };

// export interface ActionSliceType {
// 	status: RequestStateType;
// 	message?: string;
// }



