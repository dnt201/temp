export interface DefectModel {
	defectId?: string;
	givenId?: string;
	issueType?: DefectIssueNameType;
	title?: string;
	updatedAt?: string;
	updatedBy?: string;
}

export type DefectAddResponseType = Pick<DefectModel, 'defectId'>;
export type DefectAddRequestType = Omit<DefectModel, 'id'>;

export type RelatedDefectType = {
	defectId: string;
	givenId: string;
	title: string;
};

export const DefectIssueObject = {
	software_defect: 'Software Defect',
	documentation_error: 'Documentation Error',
	task: 'Task',
};

export type DefectIssueNameType = keyof typeof DefectIssueObject;

export interface DefectIssueModel {
	id?: string;
	name: DefectIssueNameType;
	description?: string;
}

export const DefectIssueArray: Array<DefectIssueModel> = Object.keys(
	DefectIssueObject
).map((key) => ({
	name: key as DefectIssueNameType,
	description: DefectIssueObject[key as DefectIssueNameType],
}));

export interface DefectDetailResponseType extends DefectModel {
	relatedDefects: Array<RelatedDefectType>;
}

export type RelatedRequestType = {
	defectId: string;
	defectTo: string;
	tenantId: string;
};

export type UploadAttachmentDefectType = {
	file: File;
	defectId: string;
};
