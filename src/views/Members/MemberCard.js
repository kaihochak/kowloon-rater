/* <!-- Course: SENG 513 --> 
<!-- Date: Nov 10, 2023 --> 
<!-- Assignment 3 -->
<!-- Name: Kai Ho Chak --> 
<!-- UCID: 30147119 --> */

function MemberCard(name, index) {
    const member = document.createElement("div");
    member.className = "member";
    member.innerHTML = `
        <div class="memberImg">
            <img src="./src/assets/${index}.png" alt="avatar">
        </div>
        <div class="memberName">${name}</div>
    `;

    return member;
}

export default MemberCard;