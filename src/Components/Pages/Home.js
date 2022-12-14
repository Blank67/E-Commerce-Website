import { Fragment } from "react";
import Jumbotron from "../Layout/Jumbotron";
import './Home.css';

const Home = (props) => {
    return (
        <Fragment>
            <section><Jumbotron heading="The Generics" /></section>
            <h1 className="text-center m-2">Tours</h1>
            <div className="px-5">
                <div className='show-box'>
                    <div> Sep 10</div>
                    <div>DETROIT, MI</div>
                    <div>DTE ENERGY MUSIC THEATRE</div>
                    <div><button>Buy Tickets</button></div>
                </div>
                <div className='show-box'>
                    <div> Sep 11</div>
                    <div>TORONTO,ON</div>
                    <div>BUDWEISER STAGE</div>
                    <div><button>Buy Tickets</button></div>
                </div>
                <div className='show-box'>
                    <div> Sep 12</div>
                    <div>BRISTOW, VA</div>
                    <div>JIGGY LUBE LIVE</div>
                    <div><button>Buy Tickets</button></div>
                </div>
                <div className='show-box'>
                    <div> Sep 13</div>
                    <div>PHOENIX, AZ</div>
                    <div>AK-CHIN PAVILION</div>
                    <div><button>Buy Tickets</button></div>
                </div>
                <div className='show-box'>
                    <div> Sep 14</div>
                    <div>LAS VEGAS, NV</div>
                    <div>AK-CHIN PAVILION</div>
                    <div><button>Buy Tickets</button></div>
                </div>
                <div className='show-box'>
                    <div> Sep 15</div>
                    <div>PHOENIX, AZ</div>
                    <div>AK-CHIN PAVILION</div>
                    <div><button>Buy Tickets</button></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Home;