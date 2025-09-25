export const R1 = ({ profileName, Pimg ,btnClass , Best,Recommend}) => {
    return (
        <div className="R1">
            <div className="title">
                <div className="profile">
                    <div className="profile-img">
                        <img src={Pimg} alt="" />
                    </div>
                    <div className="profile-text">
                        <div className="profile-name"><h4>{profileName}</h4></div>
                        <div className="profile-date">13 April 2025</div>
                    </div>
                </div>
                <div className="liked">
                    <div className="like-icon">
                        <button type="button"><img src="images/icon.png" alt="" /></button>
                    </div>
                    <div className="icon-text">22</div>
                    <div className="icon-flag">
                        <button type="button"><img src="images/icon (1).png" alt="" /></button>
                    </div>
                </div>
            </div>
            <div className="rating-star">
                <img src="images/rating.png" alt="" />
            </div>
            <div className="R1-text">
                Customer testimonials with image/video goes in here, lorem owls ipsum dolor sit amet sint velit inter mizo official shoop!
            </div>
            <div className="R1-imgs">
                <div className="R11-img">
                    <img src="images/flower1.png" alt="" />
                </div>
                <div className="R12-img">
                    <button><img src="images/Iconly - fill.png" alt="" /></button>
                   <img src="images/flower1.png" alt="" />
                </div>
            </div>
            <div className="R1-button">
                <div className={btnClass}>
                    <button type="button">Orignal</button>
                </div>
                <div className={Best}>
                    <button type="button">Best Quality</button>
                </div>
                <div className={Recommend}>
                    <button type="button">Recommended</button>
                </div>

            </div>
        </div>
    );
};
