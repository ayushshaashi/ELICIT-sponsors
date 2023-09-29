import React from "react";
import './sponsors.css';
import ongc from './ongc.png';
import acm from './acm.png';
import aper from './aper.png';
import bp from './bp.png';
import chor from './chor.png';
import dac from './dac.png';
import e from './E.png';
import enac from './enac.png';
import lit from './lit.png';
import tmc from './tmc.png';

const Sponsors =()=>{
    return(
        <div className="sponsors">
            <div className="txt">Sponsors</div>
            <div className="imgs">
                <div className="ongc">
                    <div className="txtx">Brought to you by<br/></div>
                    <div className="image1"><img class="image" src={ongc}/></div>
                </div>
                <div className="wynk">
                    <div className="txtx">Powered by<br/></div>
                    <div className="wynk-bp">
                        <div className="image1"><img class="image" src='./wynk.png' alt="wynk-studios"/></div>
                        <div className="image1"><img class="image" src={bp}/></div>
                    </div>
                </div>
                <div className="collab">
                    <div className="txtx">In collabortions with<br/></div>
                    {/* <div className="image"><img src={acm}/></div> */}
                    <div className="collab-pics">
                        <div className="image1"><img class="image" src={aper}/></div>
                        <div className="image1"><img class="image" src={chor}/></div>
                        <div className="image1"><img class="image" src={dac}/></div>
                        {/* <div className="image"><img src={e}/></div> */}
                        <div className="image1"><img class="image" src={enac}/></div>
                        <div className="image1"><img class="image" src={lit}/></div>
                        <div className="image1"><img class="image" src={tmc}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors;