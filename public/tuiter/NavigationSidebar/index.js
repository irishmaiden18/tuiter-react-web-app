const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fa-solid fa-t me-2"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
       <a class="list-group-item" href="/"><i class="fa-solid fa-house-chimney me-2"></i> Home </a>
       
       <a class="list-group-item active" href="../explore/index.html"><i class="fa-solid fa-hashtag me-2"></i> Explore </a>
       
       <a class="list-group-item" href="/"><i class="fa-solid fa-bell me-2"></i> Notifications </a>
       
       <a class="list-group-item" href="/"><i class="fa-solid fa-envelope me-2"></i> Messages </a>
       
       <a class="list-group-item" href="../bookmarks/index.html"><i class="fa-solid fa-bookmark me-2"></i> Bookmarks </a>
       
       <a class="list-group-item" href="/"><i class="fa-solid fa-list me-2"></i> Lists </a>
       
       <a class="list-group-item" href="/"><i class="fa-solid fa-user me-2"></i> Profile </a>
       
       <a class="list-group-item" href="/">
                        <div class="fa-stack mt-0 mb-1 ms-0 me-2 p-0">
                           <i class="fas fa-circle fa-stack-1x m-0 p-0"></i>
                           <i class="fa-solid fa-ellipsis fa-stack-1x m-0 text-black p-0"></i>
                        </div>
                        <span class="d-none d-xl-inline">More</span>
                    </a>
   </div>
   <div class="d-grid mt-2">
     <a href="/"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;