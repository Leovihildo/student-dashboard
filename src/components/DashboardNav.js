import React, { Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle'
import '../App.css'
import './headerStyles.css'
import { Modal, Button } from 'bootstrap';

class Navbar extends Component {
    navbarScroll = () => {
        const body = document.body;
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                body.classList.remove("scroll-up");
            }
            if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-up");
                body.classList.add("scroll-down");
            }
            if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-down");
                body.classList.add("scroll-up");
            }

            lastScroll = currentScroll;
        });
    };

    componentDidMount() {
        this.navbarScroll();
    }

    render() {
        return (
            <header>
                <nav id="nav_scroll" className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo01"
                            aria-controls="navbarTogglerDemo01"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* <img src="" alt="brand-img" /> */}
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        My courses
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Settings
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        FAQs
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            
        );
    }
}


export default Navbar