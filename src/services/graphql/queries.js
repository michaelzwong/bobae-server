// Search the total number of locations related to a term
// ie. search all locations for 'burritos'
const searchTotalLocationsQuery = `
    query searchTotal($term: String, $location: String, $limit: Int){
        search(term: $term, location: $location, limit: $limit) {
            total
        }
    }
    `;

export { searchTotalLocationsQuery };
