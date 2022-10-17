import PostSummaryItem from "./PostSummaryItem.js"


function PostSummaryList(posts1) {

    function helper() {
        let outstring = "";
        for (let i =0; i < posts1.length; i++){
            outstring = outstring + PostSummaryItem(posts1[i]);
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

export default PostSummaryList;