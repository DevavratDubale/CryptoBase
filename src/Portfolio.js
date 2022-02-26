import sidebarImage from './assets/SidebarImage.png'
import dpalt from './assets/DisplayPictureAlt.png'

const Portfolio = () => {
    const balance = 1474.91;
    return(
        <div className="sidebar">
            <div className="portfolio-info">
                <div className="useless-space" style={{height:"10vh"}}></div>
                <div className="portfolio">
                  <div className="portfolio-log">
                    <img src={dpalt} alt=""/>
                  </div>
                  <div className="portfolio-text">
                      <div className="portfolio-text-up">My Portfolio</div>
                      <div className="portfolio-text-down">${balance}</div>
                  </div>
                </div>
            </div>
            <div className="sidebar-img">
                <img src={sidebarImage} alt=""/>
            </div>
        </div>
    );
}

export default Portfolio;