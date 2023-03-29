export const APIPaths = {
	defect: {
		list: 'defect',
		detail: 'defect/:defect_id',
		create: 'defect',
		update: 'defect/:defect_id',
		deleteDefect: 'defect/:defect_id',
	},
} as const;


export const TEST_APIPaths = {
	user:{
		login:'/api/login',
	}
}