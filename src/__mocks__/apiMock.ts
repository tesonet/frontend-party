export const mockFetchReturn = (ok = true, returnValue: any) => {
	return new Promise(resolve => (
		resolve({
			ok,
			json: async () => {
				return returnValue;
			},
		})
	));
};