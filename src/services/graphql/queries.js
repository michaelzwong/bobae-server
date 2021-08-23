// Search the total number of locations related to a term
// ie. search all locations for 'burritos'
const searchTotalLocationsQuery = `
    query searchTotal($term: String, $location: String, $limit: Int, $offset: Int){
        search(term: $term, location: $location, limit: $limit, offset: $offset) {
            total
        }
    }
    `;

export { searchTotalLocationsQuery };
