/* A type definition for the parameters of the function `displayButtons`. */
interface IBtns {
    pages: [number, string][];
    mainIdx: number;
    btnContainer: HTMLDivElement;
}
/* Creating the buttons for the page navigation. */
function displayButtons({pages, mainIdx, btnContainer}:IBtns): void {
    const buttons = pages.map(function (_, pageIdx): string {
        return `
            <button
                class="page-btn ${pageIdx === mainIdx ? "active-btn" : ""}"
                data-index=${pageIdx}>
                ${pageIdx + 1}
            </button>
        `
    })
    buttons.push(`<button class="next-btn">next</button>`)
    buttons.unshift(`<button class="prev-btn">prev</button>`)

    btnContainer.innerHTML = buttons.join("");
};

export default displayButtons;