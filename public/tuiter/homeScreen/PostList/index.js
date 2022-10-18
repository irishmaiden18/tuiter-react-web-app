import NavigationSidebar from "../../NavigationSidebar/index.js";
import PostSummaryList from "../../PostSummaryList/PostSummaryList.js";
import post from "../../PostSummaryList/post.js";
import posts from "./posts.js";
import postItem from "./postItem.js";
import postList from "./PostList.js";


function homeComponent() {
    $('#wd-home').append(`
       <div class="row mt-2">
           <div class="col-2 col-md-2 col-lg-1 col-xl-2 py-3">
            ${NavigationSidebar()}
           </div>
           <div class="col-10 col-lg-7 col-xl-6 py-3">
            ${postList(posts)}
           </div>
           <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 py-3">
            ${PostSummaryList(post)}
           </div>
       </div>
   `);
}
//$(exploreComponent);
homeComponent();