function PostSummaryItem(post) {

    function topicget() {
        let topic = post.topic;
        let outstring1 = '<div class="text-secondary">';
        let outstring2 = '</div>'
        let outstring = outstring1 + topic + outstring2;
        return outstring;
    }

    function getUsername() {
        let userName = post.userName;
        let outstring1 = '<div class="fw-bold">';
        let outstring2 = '<i class="fa-solid fa-circle-check ms-1"></i>';
        let outstring = outstring1 + userName + outstring2;
        return outstring;
    }

    function getTime() {
        let location = post.time;
        let outstring1 = '<span class="text-secondary fw-normal">&nbsp;-&nbsp;';
        let outstring2 = '</span>';
        let outstring = outstring1 + location + outstring2;
        return outstring;
    }

    function getImg() {
        let image = post.image;
        let outstring1 = '<img src="';
        let outstring2 = '" class="rounded img-fluid float-end middle-images pe-2"/>';
        let outstring = outstring1 + image + outstring2;
        return outstring;
    }

    function getTitle() {
        let title = post.title;
        return title;
    }

    let output = `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                            <div class="ms-0 w-100 d-flex align-items-center">
                                <div class="float-start w-100">
                                    ${topicget()}
                                    ${getUsername()}${getTime()}
                                        <br/>
                                        ${getTitle()}
                                    </div>
                                </div>
                                ${getImg()}
                            </div>
                        </li>
`;
    return output;
}
export default PostSummaryItem;