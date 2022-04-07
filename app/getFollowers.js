var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "../node_modules/axios/index";
import "regenerator-runtime/runtime";
const URL = "https://api.github.com/users/markodenic/followers?per_page=100";
function getFollowers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios.get(URL);
            return response.data;
        }
        catch (error) {
            alert(error);
        }
    });
}
;
export default getFollowers;
