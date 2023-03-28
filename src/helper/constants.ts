import { PagingType, QueryType } from './types';

export const DATE_FORMAT = 'MM/DD/YYYY';
export const LONG_DATE_FORMAT = 'MM/DD/YYYY hh:mm A';

export const defaultPaging: PagingType = {
	pageIndex: 0,
	itemsPerPage: 10,
	currentItemCount: 0,
	totalItems: 0,
};

export const defaultQuery: QueryType<{}> = {
	page: 0,
	records: 10,
	searchField: undefined,
	searchValue: undefined,
};

export const CommonText = {
	unknownMessage: 'Unknown message',
	errorMessage: 'Something went wrong!',
	noData: 'No data',
	na: 'N/A',
	notAssigned: 'Not assigned',
	openGuideline: 'To open the guideline',
	noName: '[No Name]',
};
