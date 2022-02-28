import sidebarImage from './assets/SidebarImage.png'
import dpalt from './assets/DisplayPictureAlt.png'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { IconContext } from "react-icons/lib";
import { GoTriangleUp,GoTriangleDown } from "react-icons/go";
import { FaPlus } from 'react-icons/fa';
import PortfolioTable from './PortfolioTable';
import PortfolioChart from './PortfolioChart';

const ColorButtonA = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundImage: "linear-gradient(to right,#7716A5, #C1A9E8)",
    marginLeft: "1.5vw",
    fontWeight: "500",
    fontSize: "min(1.5vh,1.5vw)"
}));

const ColorButtonB = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundImage: "linear-gradient(to right,#645087, #C1A9E8)",
    fontWeight: "500",
    fontSize: "min(1.5vh,1.5vw)"
}));

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Portfolio = () => {


    const balance = (1474.9109).toFixed(2);
    const changeInBalance = (301.93).toFixed(2);
    return(
        <div className="total-area">
            <div className="sidebar">
            <div className="portfolio-info">
                <div className="useless-space" style={{height:"10vh"}}></div>
                <div className="portfolio">
                  <div className="portfolio-log">
                    <img src={dpalt} alt=""/>
                  </div>
                  <div className="portfolio-text">
                      <div className="portfolio-text-up">My Portfolio</div>
                      <div className="portfolio-text-down">${numberWithCommas(balance)}</div>
                  </div>
                </div>
            </div>
            <div className="sidebar-img">
                <img src={sidebarImage} alt=""/>
            </div>
        </div>
        <div className="main-content">
            <div className="main-content-heading">
                <div className="main-content-heading-up">
                    Current Balance
                </div>
                <div className="main-content-heading-down">
                    ${numberWithCommas(balance)}
                    <div className="buttonA">
                    <ColorButtonA fullWidth={true} variant="contained" startIcon={(changeInBalance>0)?
                        <IconContext.Provider value={{ className: "buttonA-icon" }}>
                        <GoTriangleUp />
                      </IconContext.Provider>
                        :
                        <IconContext.Provider value={{ className: "buttonA-icon" }}>
                        <GoTriangleDown />
                      </IconContext.Provider>
                    }>{ ((changeInBalance/balance)*100).toFixed(2) }%</ColorButtonA>
                    </div>
                    <div className="buttonB">
                    <ColorButtonB fullWidth= {true} variant="contained" startIcon={
                        <IconContext.Provider value={{ className: "buttonB-icon" }}>
                            <FaPlus />
                        </IconContext.Provider>
                    }>Add Crypto</ColorButtonB>
                    </div>
                </div>
                <div className="chart-area">
                    <PortfolioChart />
                </div>
                <div className="assets">
                    <div className="assets-heading">
                        Your Assets
                    </div>
                    <div className="assets-table">
                        <PortfolioTable />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Portfolio;