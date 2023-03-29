import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorObjectType, get, post, remove } from 'helper/api';
import { APIPaths } from 'helper/api/path';
import { CommonText, defaultPaging, defaultQuery } from 'helper/constants';
import { parseQuery } from 'helper/functions';
import {
	ActionSliceType,
	ListResponseType,
	QueryType,
	SliceStateType,
} from 'helper/types';
import { DefectAddRequestType, DefectModel } from 'models/defect';
import { RootState } from 'stores';

type DefectSliceType = SliceStateType<DefectModel> & {
	add: ActionSliceType;
	delete: ActionSliceType;
};

export type DefectsQueryType = QueryType<DefectModel> & { projectId?: string };

export const fetchDefects = createAsyncThunk(
	'defect/fetchDefects',
	async (query: DefectsQueryType, { dispatch, rejectWithValue }) => {
		try {
			const response = await get<ListResponseType<DefectModel>>(
				parseQuery(APIPaths.defect.list, { ...query }),
				{ baseURL: process.env.REACT_APP_DEFECT_URL }
			);
			dispatch(setDefectQuery(query));
			return response.data || { items: [], ...defaultPaging };
		} catch (error) {
			const message =
				(error as ErrorObjectType)?.message || CommonText.errorMessage;
			return rejectWithValue(message);
		}
	}
);

export const addDefectProject = createAsyncThunk(
	'defect/createDefect',
	async (defect: DefectAddRequestType, { dispatch, rejectWithValue }) => {
		try {
			const param = {
				issueType: defect.issueType,
				title: defect.title,
			};
			const response = await post<DefectModel>(
				APIPaths.defect.create,
				param,
				{
					baseURL: process.env.REACT_APP_PROJECT_URL,
				}
			);
			const message = 'The new defect has been saved';
			return { message, result: response.data };
		} catch (error) {
			const message =
				(error as ErrorObjectType)?.message || CommonText.errorMessage;
			return rejectWithValue(message);
		}
	}
);

export const deleteADefect = createAsyncThunk(
	'defect/deleteADefect',
	async (defectId: string, { dispatch, rejectWithValue }) => {
		try {
			await remove(
				parseQuery(
					APIPaths.defect.deleteDefect.replace(':defect_id', defectId)
				),
				{
					baseURL: process.env.REACT_APP_DEFECT_URL,
				}
			);
			const response = {
				message: 'The defect has been deleted.',
				success: true,
			};
			const message = response.message || '';
			return { message };
		} catch (error) {
			const message =
				(error as ErrorObjectType)?.message || CommonText.errorMessage;
			return rejectWithValue(message);
		}
	}
);

const initialState: DefectSliceType = {
	list: [],
	status: 'idle',
	query: defaultQuery,
	paging: defaultPaging,
	add: { status: 'idle' },
	delete: { status: 'idle' },
};

const defect = createSlice({
	name: 'defect',
	initialState,
	reducers: {
		resetDefect() {
			return initialState;
		},
		setDefectQuery(state, action: PayloadAction<QueryType<DefectModel>>) {
			state.query = action.payload;
		},
		resetDefectList(state) {
			state.list = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchDefects.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchDefects.fulfilled, (state, action) => {
				const { items, ...paging } = action.payload;
				state.status = 'succeeded';
				state.list = items;
				state.paging = paging;
			})
			.addCase(fetchDefects.rejected, (state, action) => {
				state.status = 'failed';
				state.error = String(action.payload);
				state.list = [];
			})
			.addCase(addDefectProject.pending, (state) => {
				state.add.status = 'loading';
			})
			.addCase(addDefectProject.fulfilled, (state, action) => {
				state.add = { status: 'succeeded', ...action.payload };
			})
			.addCase(addDefectProject.rejected, (state, action) => {
				state.add = {
					status: 'failed',
					message: String(action.payload),
				};
			})
			.addCase(deleteADefect.pending, (state) => {
				state.delete.status = 'loading';
			})
			.addCase(deleteADefect.fulfilled, (state) => {
				state.delete.status = 'succeeded';
			})
			.addCase(deleteADefect.rejected, (state, action) => {
				state.delete.status = 'failed';
				state.delete.message = String(action.payload);
			});
	},
});

// Select
export const selectDefectsList = (state: RootState) => state.defect.list;
export const selectDefectsStatus = (state: RootState) => state.defect.status;
export const selectDefectsPaging = (state: RootState) => state.defect.paging;
export const selectDefectsQuery = (state: RootState) => state.defect.query;
export const selectDefectAdd = (state: RootState) => state.defect.add;

export const selectDelete = (state: RootState) => state.defect.delete;

// Action
export const { resetDefect, setDefectQuery, resetDefectList } = defect.actions;

// Reducer
export default defect.reducer;
