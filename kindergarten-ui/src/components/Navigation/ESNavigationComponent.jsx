import React from 'react';
import { Link } from 'react-router-dom';
import urls from '../../constants/urls';
import logo from '../../images/logo.png';

const ESNavigationComponent = () => {
    return (
        <div className="templatemo-sidebar">
            <a className="navbar-brand text-center" href="/kindergarten/">
                <img src={logo} alt="logo" className="logo" />
            </a>
            <nav className="templatemo-left-nav">
                <Link to={`${urls.educationSpecialist.kindergartenBase}`}
                    className={`${window.location.pathname === `/kindergarten${urls.educationSpecialist.kindergartenBase}` ? "active" : ""} left-nav-link`}>
                    Darželių sąrašas</Link>
                <Link to={`${urls.educationSpecialist.ageRangeBase}`}
                    className={`${window.location.pathname === `/kindergarten${urls.educationSpecialist.ageRangeBase}` ? "active" : ""} left-nav-link`}>
                    Amžiaus grupės sukūrimas</Link>
                <Link to={`${urls.educationSpecialist.queueBase}`}
                    className={`${window.location.pathname === `/kindergarten${urls.educationSpecialist.queueBase}` ? "active" : ""} left-nav-link`}>
                    Eilių administravimas</Link>
                <Link to={`${urls.educationSpecialist.applicationsBase}`}
                    className={`${window.location.pathname === `/kindergarten${urls.educationSpecialist.applicationsBase}` ? "active" : ""} left-nav-link`}>
                    Prašymų sąrašas</Link>
                <Link to={`${urls.educationSpecialist.queueBase}/passwordChange`}
                    className={`${window.location.pathname === `/kindergarten${urls.educationSpecialist.queueBase}/passwordChange` ? "active" : ""} left-nav-link`}>
                    Mano paskyra</Link>
            </nav>
        </div >
    )
}

export default ESNavigationComponent



