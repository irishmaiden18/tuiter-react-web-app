import postItem from "./postItem.js"
import posts from "./posts.js"


function PostList(posts) {

    function helper() {
        let outstring = "";
        for (let i =0; i < posts.length; i++){
            outstring = outstring + postItem(posts[i]);
        }
        return outstring;
    }

    let outstring2 = (`
           <ul class="list-group">
                ${helper()}
           </ul>
    `);
    console.log(outstring2);
    return outstring2;

}

export default PostList;