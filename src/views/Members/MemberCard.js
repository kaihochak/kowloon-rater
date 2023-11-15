/* <!-- Course: SENG 513 --> 
<!-- Date: Oct 23, 2023 --> 
<!-- Assignment 2 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

function MemberCard(name) {
    let rating = 50;
    const member = document.createElement("div");
    member.className = "member";
    member.innerHTML = `
        <div class="memberImg"></div>
        <div class="memberName">${name}</div>
    `;

    return member;
}

export default MemberCard;