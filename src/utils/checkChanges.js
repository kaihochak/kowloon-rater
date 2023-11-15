export default function getChangedParts(newState, oldState) {
    let changed = [];

    if (newState.rankingName !== oldState.rankingName) {
        changed.push('rankingName');
    }

    if (!arraysEqual(newState.memberNames, oldState.memberNames)) {
        changed.push('memberNames');
    }

    if (!arraysEqual(newState.targets, oldState.targets)) {
        changed.push('targets');
    }

    if (!mapsEqual(newState.targetRatings, oldState.targetRatings)) {
        changed.push('targetRatings');
    }

    if (!arraysEqual(newState.sortedRankings, oldState.sortedRankings)) {
        changed.push('sortedRankings');
    }

    if (newState.currentTargetIndex !== oldState.currentTargetIndex) {
        changed.push('currentTargetIndex');
    }

    if (newState.currentRaterIndex !== oldState.currentRaterIndex) {
        changed.push('currentRaterIndex');
    }

    if (newState.targetRatingDone !== oldState.targetRatingDone) {
        changed.push('targetRatingDone');
    }

    if (newState.isSessionInProgress !== oldState.isSessionInProgress) {
        changed.push('isSessionInProgress');
    }

    return changed;
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

function mapsEqual(map1, map2) {
    if (map1.size !== map2.size) return false;
    for (let [key, val] of map1) {
        if (!map2.has(key) || map2.get(key) !== val) return false;
    }
    return true;
}
