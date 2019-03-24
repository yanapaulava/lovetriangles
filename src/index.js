/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;
    for (var i = 0; i < preferences.length; i++) {

        let first = preferences[i];
        let second = preferences[first - 1];
        if (first === second) {
            continue;
        }
        let third = preferences[second - 1];
        let fourth = preferences[third - 1];

        if (first === fourth) {
            count = count + 1;
            delete preferences[third - 1];
            delete preferences[fourth - 1];
            delete preferences[second - 1];
        }
    }

    return count;
};