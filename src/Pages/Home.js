import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "../Components/Layout/Jumbotron";
import { fetchCartData } from "../redux-store/http-request/http-request";
import './Home.css';

const Home = (props) => {
    const dispatch = useDispatch();
    const uID = useSelector(state => state.auth.uuID);

    useEffect(() => {
        // console.log('Get useEffect');
        dispatch(fetchCartData((uID)));
    }, [dispatch, uID]);

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