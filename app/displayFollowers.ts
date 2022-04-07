/* interface is defining the structure of the data that will be returned from the API. */
export interface IFollowers {
    followers: {
        id: number,
        avatar_url: string,
        login: string,
        html_url: string,
        repos_url: string
    }[];
}
/* Taking the data from the API and displaying it in the DOM. */
function displayFollowers({followers}: IFollowers): void {
    const apiFollowers = followers.map(function (follower): string {
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
        `
    })
    const followsersList = document.querySelector(".followers-container") as HTMLDivElement;
    followsersList.innerHTML = apiFollowers.join("");
};

export default displayFollowers;