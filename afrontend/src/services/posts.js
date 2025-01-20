import axios from "axios"

const getPosts = async () => {

try {
    const post = await axios.get(`/books`);
    return post;
        } catch (e) {
            const msg = e?.response?.error.message ?? e?.message ?? 'Unknown Error';
            console.error(msg);
    return false;
    }
};
   

export default getPosts;