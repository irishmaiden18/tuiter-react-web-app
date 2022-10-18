import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import post from "../PostSummaryList/post.js";

function helper(){
    return(`
            <div>
                <div class="form-group has-search list-group-item d-flex justify-content-between align-items-center mb-2">
                    <span class="fa fa-search searchIcon ps-2"></span>
                    <input type="text" id="search-input" class="searchbar" placeholder="Search Tuiter"/>
                    <i class="fa-solid fa-gear fa-2x text-primary"></i>
                </div>
               <ul class="nav nav-tabs mb-2">
                        <li class="nav-item">
                            <a class="nav-link active" href="for-you.html">For you</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="trending.html">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="news.html">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="sports.html">Sports</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="entertainment.html">Entertainment</a>
                        </li>
               </ul>
               <div class="card">
                    <img class="card-img-top w-100" src="../../images/rocket1.jpg" alt="Card image">
               </div>
            </div>
    `);
}

function ExploreComponent(){
    let string1 = helper();
    let string2 = PostSummaryList(post);

    return(string1 + string2);
}
export default ExploreComponent;
