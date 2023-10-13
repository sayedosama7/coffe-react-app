/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const NavBar = () => {
    return (
        <div>
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand mt-2 mt-lg-0 text-white" href="#">
                grandcoffee
            </a>
            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav d-flex ms-auto mb-2 mb-lg-0">
                    <li class="nav-item ">
                        <a class="nav-link text-white" href="#">home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">about us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">contact us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        </div>
    )
}

export default NavBar