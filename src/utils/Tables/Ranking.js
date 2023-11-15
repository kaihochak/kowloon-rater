/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

// Ranking.js
function Ranking(sortedRankings) {
    const rankingList = document.createElement('table');
    rankingList.className = 'rankingList';
    rankingList.innerHTML = `
        <tr>
            <th>Rank</th>
            <th>Target</th>
            <th>Rating</th>
        </tr>`

    console.log(sortedRankings);

    if (sortedRankings) {
        sortedRankings.forEach((item, index) => {
            console.log(item);
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index+1}</td>
                <td>${item.target}</td>
                <td>${Math.round(item.averageRating * 1000) / 1000}</td>
            `;
            rankingList.appendChild(row);
        });
    }
    return rankingList;
}
export default Ranking;