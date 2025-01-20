import axios from "axios"


const getPost = async (postId) => {

try {
   const post = await axios.get(`/posts/${postId}`);
    return post;
        } catch (e) {
        const msg = e?.response?.error.message ?? e?.message ?? 'Unknown Error';
        console.error(msg);
        
        return false;
    }
};
   
export default getPost;