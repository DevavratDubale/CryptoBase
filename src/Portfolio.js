import sidebarImage from './assets/SidebarImage.png'

const Portfolio = () => {
    return(
        <div className="sidebar">
            <div className="portfolios"></div>
            <div className="sidebar-img">
                <img src={sidebarImage} alt=""/>
            </div>
        </div>
    );
}

export default Portfolio;