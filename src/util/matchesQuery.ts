const matchesQuery = (query: string, item: any) => {
    const lowerQuery = query.toLowerCase();
    return Object.values(item).some(value => {
        if (typeof value === 'string') {
            return value.toLowerCase().includes(lowerQuery);
        }
        return false;
    });
}

export default matchesQuery;
