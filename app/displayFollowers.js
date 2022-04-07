/* Taking the data from the API and displaying it in the DOM. */
function displayFollowers({ followers }) {
    const apiFollowers = followers.map(function (follower) {
        const { id, avatar_url: image, login: username, html_url: profile, repos_url: repos } = follower;
        return `
            <article class="follower">
                <img src="${image}" alt="follower />"
                <h4>${username}</h4>
                <small>id: ${id}</small>
                <div>
                    <a href="${profile}" target="_blank" class="btn">profile</a>
                    <a href="${repos}" target="_blank" class="btn">repos</a>
                </div>
            </article>
        `;
    });
    const followsersList = document.querySelector(".followers-container");
    followsersList.innerHTML = apiFollowers.join("");
}
;
export default displayFollowers;
