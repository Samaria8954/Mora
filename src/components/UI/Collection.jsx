export const Collection = ({ image, title }) => {
    return (
        <div className="collection">
            <div className="circle-box">
                <img src={image} alt={title} />
            </div>
            <div className="circle-text">
                <h4>{title}</h4>
            </div>
        </div>
    );
};
