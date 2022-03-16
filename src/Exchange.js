import Sidebar from "./Sidebar";
import Card from "./Card";

const Exchange = ({balance , changeInBalance}) => {
    return (
        <div className="total-area">
            <Sidebar balance={balance}/>
            <div className="main-content">
                <div className="exchange-cards" style={{width:"60vw", textAlign:"left", margin:"auto", marginTop:"5vh"}}>
                    <table style={{ marginLeft:"1vw", height:"8vh", width:"100%"}}>
                        <tr>
                        <th style={{ width:"8%", fontSize:"2vh" }}>
                            
                        </th>
                        <th style={{ width:"30%", fontSize:"2vh" }}>Currency Name</th>
                        <th style={{ width:"20%", fontSize:"2vh" }}>Current Price</th>
                        <th style={{ width:"20%", fontSize:"2vh" }}>Previous Price</th>
                        <th style={{ width:"20%", fontSize:"2vh" }}>Rate Change</th>
                        </tr>
                    </table>
                    <Card crypto_name={"BITCOIN1"} crypto_symbol={"BTC"} crypto_currPrice={100} crypto_prevPrice={50}/>
                    <Card crypto_name={"BITCOIN2"} crypto_symbol={"BTC"} crypto_currPrice={10} crypto_prevPrice={50}/>
                    <Card crypto_name={"BITCOIN3"} crypto_symbol={"BTC"} crypto_currPrice={100} crypto_prevPrice={500}/>
                    <Card crypto_name={"BITCOIN4"} crypto_symbol={"BTC"} crypto_currPrice={100} crypto_prevPrice={10}/>
                    <Card crypto_name={"BITCOIN5"} crypto_symbol={"BTC"} crypto_currPrice={100} crypto_prevPrice={20}/>
                    <Card crypto_name={"BITCOIN6"} crypto_symbol={"BTC"} crypto_currPrice={100} crypto_prevPrice={30}/>
                    <Card crypto_name={"BITCOIN7"} crypto_symbol={"BTC"} crypto_currPrice={100} crypto_prevPrice={50}/>
                    <Card crypto_name={"BITCOIN8"} crypto_symbol={"BTC"} crypto_currPrice={100} crypto_prevPrice={50}/>
                    <Card crypto_name={"BITCOIN9"} crypto_symbol={"BTC"} crypto_currPrice={100} crypto_prevPrice={50}/>
                    <Card crypto_name={"BITCOIN10"} crypto_symbol={"BTC"} crypto_currPrice={100} crypto_prevPrice={50}/>
                    <Card crypto_name={"BITCOIN11"} crypto_symbol={"BTC"} crypto_currPrice={100} crypto_prevPrice={50}/>
                </div>
            </div>
        </div>
    );
}

export default Exchange;