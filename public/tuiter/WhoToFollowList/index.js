import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {

    function helper() {
        let outstring = "";
        for (let i =0; i < who.length; i++){
            outstring = outstring + WhoToFollowListItem(who[i]);
        }
        return outstring;
    }

    return (`
           <ul class="list-group">
                <li class="list-group-item mb-0 h5"> Who to Follow</li>
                ${helper()}
           </ul>
`); }

export default WhoToFollowList;