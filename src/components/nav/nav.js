// Packages
import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { useLocation } from 'react-router-dom';
import { FaStream, FaBars, FaTimes, FaUserCircle, FaHome, FaLeaf, FaStar, FaQuestionCircle } from 'react-icons/fa';
import cx from 'classnames';

// Components
import NavLink from 'components/nav-link';
import Link from 'components/link';
import Icon from 'components/icon';
import Button from 'components/button';
import RouteLink from 'components/route-link';
import Image from 'components/image';
// Auth
import { AuthProvider, useAuth } from 'auth/auth';


// Helpers
import useWindowSize from '../../helpers/useWindowSize';

// Styles
import './nav.scss';
import logo from 'images/logo.png';


// export default function Nav(props) {
const Nav = forwardRef((props, ref) => {
    let auth = useAuth();
    const size = useWindowSize();
    const [mobile, setMobile] = useState(false);
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        closeNav() {
            setOpen(false);
        }
    }))


    useEffect(() => {
        if (size.width <= 1000) {
            setMobile(true);
        }
        else {
            setMobile(false);
        }
    }, [size])




    function handleChange() {
        setOpen(!open);
    }


    const loginStyle = {
        // backgroundColor: '#ffffff',
        // borderColor: '#FFFFFF',
        // width: 80,
        color: '#333333'
    }

    const registerStyle = {
        backgroundColor: '#FE61A3',
        // borderColor: '#FFFFFF',
        // width: 80,
        color: '#333333'

    }


    const classes = cx(
        'nav',
        { 'mobile': mobile }
    )

    return (
        <>
            {mobile ?
                <>
                    <div className={classes}>
                        <div className="nav-padding">
                            <NavLogo />
                            {/* <FakeSpace /> */}
                            <div className="nav-title">
                                <p> JUNGLE IN MY PLANTS </p>
                            </div>
                            <Hamburger open={open} onChange={handleChange} />
                        </div>

                        {/* <div className="nav-links mobile">

                        </div> */}
                        {open ?
                            <div className="nav-menu">
                                <div className="nav-login">
                                    {!auth.user ?
                                        <>
                                            <Link to="/login">
                                                <Button style={loginStyle}> Login </Button>
                                            </Link>
                                            <Link to="/register">
                                                <Button style={registerStyle}> Register </Button>
                                            </Link>
                                            <Icon className="nav-icon-profile profile-none"> <FaUserCircle /> </Icon>
                                        </>
                                        :
                                        <>
                                            <Link to="/logout">
                                                <Button> Logout </Button>
                                            </Link>
                                            <Link to="/account">
                                                <Icon className="nav-icon-profile"> <FaUserCircle /> </Icon>
                                            </Link>
                                        </>
                                    }
                                </div>

                                <div className="nav-links">

                                    <RouteLink to="/" expand={true} icon={<FaHome />} text={"Home"} />
                                    <RouteLink to="/plants" expand={true} icon={<FaLeaf />} text={"Plants"} />
                                    <RouteLink to="/wishlist" expand={true} icon={<FaStar />} text={"Wistlist"} />
                                    <br />
                                    <br />
                                    <RouteLink to="/about" expand={true} icon={<FaQuestionCircle />} text={"About"} />

                                </div>
                            </div>
                            :
                            <> </>
                        }
                    </div>

                </>
                :
                <div className='nav'>
                    <div className="nav-padding">
                        <NavLogo />
                        <div className="nav-title">
                            <p> JUNGLE IN MY PLANTS </p>
                        </div>
                        <div className="nav-login">
                            {!auth.user ?
                                <>
                                    <Link to="/login">
                                        <Button style={loginStyle}> Login </Button>
                                    </Link>
                                    <Link to="/register">
                                        <Button style={registerStyle}> Register </Button>
                                    </Link>
                                    <Icon className="nav-icon-profile profile-none"> <FaUserCircle /> </Icon>
                                </>
                                :
                                <>
                                    <Link to="/logout">
                                        <Button> Logout </Button>
                                    </Link>
                                    <Link to="/account">
                                        <Icon className="nav-icon-profile"> <FaUserCircle /> </Icon>
                                    </Link>
                                </>
                            }
                        </div>
                    </div>



                </div>
            }

        </>
    )
})


function FakeSpace() {
    return (
        <div className="fake-space">
            <FaBars className="icon" />
        </div>
    )
}

function Hamburger({ onChange, open, ...props }) {

    function handleClick() {
        if (onChange) {
            onChange();
        }
    }

    return (
        <div className="hamburger" onClick={handleClick}>
            {open ?
                <FaTimes className="icon" />
                :
                <FaBars className="icon" />
            }

        </div>
    )
}




function NavLogo(props) {

    return (
        <div className="nav-logo">
            <FaLeaf className="icon" />



            {/* <Image src={logo} /> */}
        </div>
    )
}
export default Nav;