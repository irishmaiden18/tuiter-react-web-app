

function PostItem(post) {

    function getAuthor() {
        let author = post.author;
        let outstring1 = '<span>';
        let outstring2 = '<i class="fa-solid fa-circle-check ms-1"></i></span>'
        let outstring = outstring1 + author + outstring2;
        return outstring;
    }

    function getUsername() {
        let userName = post.userName;
        let outstring1 = '<span class="text-secondary">@';
        let outstring2 = '</span>';
        let outstring = outstring1 + userName + outstring2;
        return outstring;
    }

    function getTime() {
        let time = post.time;
        let outstring1 = '<span class="text-secondary fw-normal">&nbsp;-&nbsp;';
        let outstring2 = '</span>';
        let outstring = outstring1 + time + outstring2;
        return outstring;
    }

    function getTopText() {
        let userName = post.toptext;
        let outstring1 = '<div class="fw-bold">';
        let outstring2 = '';
        let outstring = outstring1 + userName + outstring2;
        return outstring;
    }

    function getImg() {
        let image = post.image;
        let outstring1 = '<img src="';
        let outstring2 = '" class="rounded img-fluid"/>';
        let outstring = outstring1 + image + outstring2;
        return outstring;
    }

    function getAvatar() {
        let image = post.avataricon;
        let outstring1 = '<img src="';
        let outstring2 = '" class="img-fluid avatarIcon"/>'
        let outstring = outstring1 + image + outstring2;
        return outstring;
    }

    function getBottomTitle() {
        let string1 = post.bottomtitle;
        let outstring1 = '<div class="fw-bold clear">';
        let outstring2 = '';
        let outstring = outstring1 + string1 + outstring2;
        return outstring;
    }

    function getBottomText() {
        let string1 = post.bottomtext;
        let outstring1 = '<div class="text-secondary fw-normal">';
        let outstring2 = '</div>';
        let outstring = outstring1 + string1 + outstring2;
        return outstring;
    }

    function getNoOfComments() {
        let tuits = post.comments;
        let outstring1 = '<span class="text-secondary fw-normal">';
        let outstring2 = '</span>';
        let outstring = outstring1 + tuits + outstring2;
        return outstring;
    }

    function getNoOfTuits() {
        let tuits = post.retweet;
        let outstring1 = '<span class="text-secondary fw-normal">';
        let outstring2 = '</span>';
        let outstring = outstring1 + tuits + outstring2;
        return outstring;
    }

    function getNoOfLikes() {
        let tuits = post.likes;
        let outstring1 = '<span class="text-secondary fw-normal">';
        let outstring2 = '</span>';
        let outstring = outstring1 + tuits + outstring2;
        return outstring;
    }

    let output = `
                <li class="list-group-item d-flex justify-content-between">
                    <div class="ms-0 w-100 d-flex">
                            <div class="avatar col-1 me-2">${getAvatar()}</div>
                        <div class="float-start w-100">
                            ${getAuthor()} ${getUsername()}${getTime()}
                            <br/>
                            ${getTopText()}
                            <br/>
                            ${getImg()}
                            ${getBottomTitle()}
                            <br/>
                            ${getBottomText()}
                        </div>
                        <div class="icons">
                <div>
                    <a href="#">
                    <img src="../../../images/comment.svg" class="homeIcons" />
                    ${getNoOfComments()}
                    </a>
                </div>
                <div>
                    <a href="#">
                    <img src="../../../images/retweet.svg" class="homeIcons" />
                    ${getNoOfTuits()}
                    </a>
                </div>
                <div>
                    <a href="#">
                    <img src="../../../images/like.svg" class="homeIcons" />
                    ${getNoOfLikes()}
                    </a>
                </div>
                <div>
                    <a href="#">
                    <img src="../../../images/upload.svg" class="homeIcons" />
                    </a>
                </div>
            </div>
            </div>
            <div class="clear"></div>
                    </div>
                </li>
`;
    return output;
}
export default PostItem;