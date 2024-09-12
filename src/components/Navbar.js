import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-1'>
                <div className='navbar-left'>
                    <div className='logo-div'>
                        <Link to='/' className='logo-main'>
                            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 888.23 79.71" width="312" height="28">
                                <g>
                                    <rect x="311.79" width="141.74" height="79.71" fill="#a50610"/>
                                    <polygon points="355.84 18.32 365.68 18.32 365.68 52.89 409.48 52.89 409.48 61.38 355.84 61.38 355.84 18.32" fill="#fff"/>
                                </g>
                                <g id="middle">
                                    <rect x="155.9" y="0" width="141.74" height="79.71" fill="#d3000d"/>
                                    <polygon points="221.84 26.81 196.93 26.81 196.93 18.32 256.6 18.32 256.6 26.81 231.69 26.81 231.69 61.39 221.84 61.39 221.84 26.81" fill="#fff"/>
                                </g>
                                <g>
                                    <rect width="141.74" height="79.71" fill="#fa0000"/>
                                    <path d="M40.26,18.32h37.77c11.5,0,17.9,5.17,17.9,13.84,0,7.44-4.8,12.43-12.98,13.6l18.52,15.63h-14.21l-17.41-15.07h-19.75v15.07h-9.84V18.32Zm36.48,19.93c6.09,0,9.04-1.97,9.04-5.97s-2.95-5.91-9.04-5.91h-26.64v11.87h26.64Z" fill="#fff"/>
                                </g>
                                <g>
                                    <path d="M481.9,61.27V18.48h7.82V54.42h22.56v6.85h-30.38Z" fill="#050508"/>
                                    <path d="M518.7,61.27V18.48h31.6v6.85h-23.78v10.51h21.88v6.79h-21.88v11.8h23.78v6.85h-31.6Zm6.42-47.98V5.28h7.52V13.28h-7.52Zm11.86,0V5.28h7.52V13.28h-7.52Z" fill="#050508"/>
                                    <path d="M569.12,61.27V25.33h-13.88v-6.85h35.58v6.85h-13.88V61.27h-7.82Z" fill="#050508"/>
                                    <path d="M594.24,61.27v-6.72l24.27-28.97v-.24h-23.72v-6.85h33.74v6.85l-24.15,28.85v.24h24.51v6.85h-34.66Z" fill="#050508"/>
                                    <path d="M635.92,61.27V18.48h31.6v6.85h-23.78v10.51h21.88v6.79h-21.88v11.8h23.78v6.85h-31.6Z" fill="#050508"/>
                                    <path d="M676.08,61.27V18.48h21.46c7.76,0,12.71,4.34,12.71,11.12,0,3.97-1.65,7.09-4.77,8.74v.24c4.1,1.71,6.3,5.32,6.3,10.33,0,7.7-5.13,12.35-13.63,12.35h-22.07Zm7.82-25.55h12.16c4.1,0,6.3-1.83,6.3-5.38,0-3.24-2.08-4.95-5.93-4.95h-12.53v10.33Zm0,18.64h12.96c4.52,0,7.03-2.14,7.03-5.93s-2.45-5.81-7.03-5.81h-12.96v11.74Z" fill="#050508"/>
                                    <path d="M718.62,44.76V18.48h7.82v26.04c0,6.85,3.79,10.45,10.76,10.45s10.82-3.61,10.82-10.45V18.48h7.76v26.28c0,10.7-7.03,17.18-18.58,17.18s-18.58-6.54-18.58-17.18Z" fill="#050508"/>
                                    <path d="M765.25,61.27V18.48h31.6v6.85h-23.78v10.51h21.88v6.79h-21.88v11.8h23.78v6.85h-31.6Z" fill="#050508"/>
                                    <path d="M842.33,60.66v.61h-8.8l-10.58-15.83h-9.72v15.83h-7.82V18.48h20.66c8.8,0,14.24,5.68,14.24,13.33,0,6.42-3.55,11.06-9.17,12.84l11.19,16.02Zm-29.1-35.33v13.26h12.35c4.34,0,6.85-2.57,6.85-6.78s-2.57-6.48-6.85-6.48h-12.35Z" fill="#050508"/>
                                    <path d="M846.48,39.94c0-13.45,8.13-22.13,21.58-22.13,11.19,0,18.64,6.05,19.68,14.98h-7.89c-.92-4.89-4.95-8.01-11.8-8.01-8.92,0-13.63,5.75-13.63,15.16s4.71,15.04,13.69,15.04c7.33,0,11.55-3.91,12.23-9.84h-10.7v-6.79h18.58v4.22c0,11.61-7.58,19.38-20.11,19.38-13.45,0-21.64-8.56-21.64-22.01Z" fill="#050508"/>
                                </g>
                            </svg>
                        </Link>
                    </div>
                    <div className='nav-left-links'>
                        <Link to='/'>Home</Link>
                        <Link to='/play'>Play</Link>
                        <Link to='/tele'>Télé</Link>
                        <Link to='/radio'>Radio</Link>
                    </div>
                </div>
            </div>
            <div className='line'></div>
            <div className='navbar-2'>
                <Link to='/sport'>
                    Sport
                </Link>
                <Link to='/sport/news'>
                    News
                </Link>
                <Link to='sport/live-arena'>
                    Live Arena
                </Link>
                <Link to='/sport/f1'>
                    F1
                </Link>
                <Link to='/sport/futball'>
                    Futtball
                </Link>
                <Link to='/sport/basketball'>
                    Basketball
                </Link>
                <Link to='/sport/handball'>
                    Handball
                </Link>
                <Link to='/sport/deschtennis'>
                    Dëschtennis
                </Link>
                <Link to='/sport/volleyball'>
                    Volleyball
                </Link>
                <Link to='/sport/cyclissem'>
                    Vëlossport
                </Link>
                <Link to='/sport/auto-moto-sport'>
                    Auto-Moto
                </Link>
                <Link to='/sport/e-sport'> 
                    E-Sport
                </Link>
                <Link to='/sport/weider-sportaarten'>
                    Weider Sportaarten
                </Link>
            </div>
            <div className='line'></div>
        </div>
    )
}

export default Navbar;