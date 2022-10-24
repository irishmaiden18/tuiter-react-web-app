function WhoToFollowListItem(param) {

    function picget() {
        let location = param.avatarIcon;
        let outstring1 = '<img src="';
        let outstring2 = '" class="rounded-circle img-fluid col-lg-2 float-start"/>';
        return outstring1 + location + outstring2;
    }

    function nameget() {
        let location = param.userName;
        let outstring1 = '<div class="fw-bold">';
        let outstring2 = '<i class="fa-solid fa-circle-check ms-1"></i></div>';
        return outstring1 + location + outstring2;
    }
    function atget() {
        let location = param.handle;
        let outstring1 = '<span>@';
        let outstring2 = '</span>';
        return outstring1 + location + outstring2;
    }

    let output = `
                <li class="list-group-item align-items-center">
                    <div class="ms-0 w-100 d-flex align-items-center">
                        ${picget()}
                        <div class="ms-3 float-start w-100">
                            ${nameget()}
                            ${atget()}
                        </div>
                    </div>
                    <button type="button" class="btn rounded-pill btn-primary float-end">Follow
                    </button>
                </li>
`;

    return output;
}
export default WhoToFollowListItem;