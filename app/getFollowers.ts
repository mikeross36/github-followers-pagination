import axios from "../node_modules/axios/index";
import "regenerator-runtime/runtime";


const URL = "https://api.github.com/users/markodenic/followers?per_page=100";

async function getFollowers():Promise<any> {
    try {
        const response = await axios.get(URL);
        return response.data;
    }
    catch (error) {
        alert(error);
    }
};

export default getFollowers;