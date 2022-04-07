/* It's taking the `followers` array and splitting it into pages of 10 items each. */
function pagination({ followers }) {
    const followersPerPage = 10;
    const totalPages = Math.ceil(followers.length / followersPerPage);
    const paginatedFollowers = Array.from({ length: totalPages }, function (_, index) {
        return followers.slice(index * followersPerPage, (index + 1) * followersPerPage);
        // const start = index * followersPerPage;
        // return followers.slice(start, start + followersPerPage);
    });
    return paginatedFollowers;
}
;
export default pagination;
