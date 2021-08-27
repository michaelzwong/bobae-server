// Search the total number of locations related to a term
// ie. search all locations for 'burritos'
const searchTotalLocationsQuery = `
    query searchTotal($term: String, $location: String, $limit: Int, $offset: Int){
        search(term: $term, location: $location, limit: $limit, offset: $offset) {
            total
        }
    }
    `;

const searchTopTenQuery = `
    query searchTopTen($latitude: Float, $longitude: Float, $radius: Float){
        search(term: "boba", latitude: $latitude, longitude: $longitude, limit: 10, radius: $radius, sort_by: "rating") {
            total
            business {
                name
                rating
                review_count
            }
        }
    }
`;

export { searchTotalLocationsQuery, searchTopTenQuery };
