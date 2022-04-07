import getFollowers from "./getFollowers";
import displayFollowers from "./displayFollowers";
import displayButtons from "./displayButtons";
import pagination from "./pagination";

type trackers = {
    pages: any[];
    index: number;
    btnContainer: HTMLDivElement;
};

function pageTracker() {
    let index = 0; /* `index` is keeping track of which page of followers is being displayed. */
    let pages: any[] = []; /* `pages` is an array of arrays. Each array is a page of followers. */
    const btnContainer = document.querySelector(".btn-container") as HTMLDivElement;
    return { pages, index, btnContainer };
};

let { pages, index, btnContainer } : trackers = pageTracker();

function setupUI(): void {
    displayFollowers({ followers: pages[index] });
    displayButtons({pages, mainIdx: index, btnContainer});
};

/* `e` is a generic event object. It is used to store information about the event that triggered the function. */
function eventTriggering(): void {
    btnContainer.addEventListener("click", function (
        e: Event | EventTarget & { target: HTMLButtonElement }): void {
        const btn = e.target as HTMLButtonElement;
        // omiting the return statement
        btn.classList.contains("btn-contanier") ? index = 0 : null;
        if (btn.classList.contains("page-btn")) index = +(btn.dataset.index as string);
        if (btn.classList.contains("next-btn")) index >= pages.length - 1 ? index = 0 : index++;
        if (btn.classList.contains("prev-btn")) index <= 0 ? index = pages.length - 1 : index--;

        setupUI()
    });
};

(async function (): Promise<void> {
    try {
        const followers = await getFollowers();
        pages = pagination({ followers });
        setupUI();
        eventTriggering();
    }
    catch (error) {
        alert(error);
    }
})();