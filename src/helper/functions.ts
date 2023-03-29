export const parseQuery = (path: string, object?: any) => {
	const copyObject = { ...object };
	if (!copyObject) return path;
	if (!copyObject?.searchField || !copyObject?.searchValue) {
		delete copyObject.searchField;
		delete copyObject.searchValue;
	}
	const result = Object.keys(copyObject).reduce(
		(prev, current) =>
			`${prev}${
				typeof copyObject[current] !== 'undefined' &&
				copyObject[current] !== false &&
				String(copyObject[current]).length > 0
					? `${
							prev.length > 0 ? '&' : ''
					  }${current}=${encodeURIComponent(copyObject[current])}`
					: ''
			}`,
		''
	);
	return `${path}${result ? `?${result}` : ''}`;
};
