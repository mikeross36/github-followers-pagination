var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import getFollowers from "./getFollowers";
import displayFollowers from "./displayFollowers";
import displayButtons from "./displayButtons";
import pagination from "./pagination";
function pageTracker() {
    let index = 0; /* `index` is keeping track of which page of followers is being displayed. */
    let pages = []; /* `pages` is an array of arrays. Each array is a page of followers. */
    const btnContainer = document.querySelector(".btn-container");
    return { pages, index, btnContainer };
}
;
let { pages, index, btnContainer } = pageTracker();
function setupUI() {
    displayFollowers({ followers: pages[index] });
    displayButtons({ pages, mainIdx: index, btnContainer });
}
;
/* `e` is a generic event object. It is used to store information about the event that triggered the function. */
function eventTriggering() {
    btnContainer.addEventListener("click", function (e) {
        const btn = e.target;
        // omiting the return statement
        btn.classList.contains("btn-contanier") ? index = 0 : null;
        if (btn.classList.contains("page-btn"))
            index = +btn.dataset.index;
        if (btn.classList.contains("next-btn"))
            index >= pages.length - 1 ? index = 0 : index++;
        if (btn.classList.contains("prev-btn"))
            index <= 0 ? index = pages.length - 1 : index--;
        setupUI();
    });
}
;
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const followers = yield getFollowers();
            pages = pagination({ followers });
            setupUI();
            eventTriggering();
        }
        catch (error) {
            alert(error);
        }
    });
})();
