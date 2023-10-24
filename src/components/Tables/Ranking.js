/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

function RankingList() {
    const rankingList = document.createElement('table');
    rankingList.className = 'rankingList';
    rankingList.innerHTML = `
        <tr>
            <th>Rank</th>
            <th>Target</th>
            <th>Rating</th>
        </tr>
        <tr>
            <td>1</td>
            <td>cherry</td>
            <td>97</td>
        </tr>
        <tr>
            <td>2</td>
            <td>blackberry</td>
            <td>95</td>
        </tr>
        <tr>
            <td>3</td>
            <td>kiwi</td>
            <td>83</td>
        </tr>
        <tr>
            <td>4</td>
            <td>papaya</td>
            <td>84</td>
        </tr>
    `;
    return rankingList;
}


function Ranking(){
    const ranking = document.createElement('div');
    ranking.className = 'ranking rankingBoard-cards';
    ranking.appendChild(RankingList());     
    
    return ranking;
}

export default Ranking;