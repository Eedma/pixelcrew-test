import "./eventsGrid.scss";

interface GridItemProps {
    title: string;
    text: string;
}

const GridItem = ({title, text}: GridItemProps) => {
    return (
        <div className="grid-item">
            <div className="grid-item-image"></div>
            <div className="grid-item-text">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default GridItem;
