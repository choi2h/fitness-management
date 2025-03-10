import axios from "axios";
import API from "./API";

async function PostJoinUser(joinInfo) {
    const res = await axios.post("http://localhost:8080/user/join", joinInfo);
    console.log(res);
    return res;
}

export default PostJoinUser;