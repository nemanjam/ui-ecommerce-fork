import React, { Fragment } from 'react';

const Alibaba = () => {
    return (
        <Fragment>
            <header className="section-header">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img
                                className="logo"
                                src="ui-ecommerce/images/logos/logo-alibaba.png"
                                alt="alibaba style e-commerce html template file"
                                title="alibaba e-commerce html css theme"
                            />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarTop"
                            aria-controls="navbarTop"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarTop"
                        >
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item dropdown">
                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        {' '}
                                        Sourcing{' '}
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Top Suppliers
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Suppliers by Regions{' '}
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Online Retailer{' '}
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        {' '}
                                        Services{' '}
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Trade Assurance{' '}
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Arabic
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Logistics Service{' '}
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Membership Services
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        {' '}
                                        Community{' '}
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Help Center
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Submit a Dispute{' '}
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                For Suppliers{' '}
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        {' '}
                                        Multi Request{' '}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="http://bootstrap-ecommerce.com/"
                                        className="nav-link"
                                    >
                                        {' '}
                                        Download{' '}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <section className="header-main shadow-sm">
                    <div className="container">
                        <div className="row-sm align-items-center">
                            <div className="col-lg-4-24 col-sm-3">
                                <div className="category-wrap dropdown py-1">
                                    <button
                                        type="button"
                                        className="btn btn-light  dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        <i className="fa fa-bars"></i>{' '}
                                        Categories
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">
                                            Machinery / Mechanical Parts / Tools{' '}
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Consumer Electronics / Home
                                            Appliances{' '}
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Auto / Transportation
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Apparel / Textiles / Timepieces{' '}
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Home & Garden / Construction /
                                            Lights{' '}
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Beauty & Personal Care / Health{' '}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-11-24 col-sm-8">
                                <form action="#" className="py-1">
                                    <div className="input-group w-100">
                                        <select
                                            className="custom-select"
                                            name="category_name"
                                        >
                                            <option value="">All type</option>
                                            <option value="">Special</option>
                                            <option value="">Only best</option>
                                            <option value="">Latest</option>
                                        </select>
                                        <input
                                            type="text"
                                            className="form-control"
                                            style={{ width: '50%' }}
                                            placeholder="Search"
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-warning"
                                                type="submit"
                                            >
                                                <i className="fa fa-search"></i>{' '}
                                                Search
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-9-24 col-sm-12">
                                <div className="widgets-wrap float-right row no-gutters py-1">
                                    <div className="col-auto">
                                        <div className="widget-header dropdown">
                                            <a
                                                href="#"
                                                data-toggle="dropdown"
                                                data-offset="20,10"
                                            >
                                                <div className="icontext">
                                                    <div className="icon-wrap">
                                                        <i className="text-warning icon-sm fa fa-user"></i>
                                                    </div>
                                                    <div className="text-wrap text-dark">
                                                        Sign in <br />
                                                        My account{' '}
                                                        <i className="fa fa-caret-down"></i>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="dropdown-menu">
                                                <form className="px-4 py-3">
                                                    <div className="form-group">
                                                        <label>
                                                            Email address
                                                        </label>
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="email@example.com"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Password</label>
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary"
                                                    >
                                                        Sign in
                                                    </button>
                                                </form>
                                                <hr className="dropdown-divider" />
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Have account? Sign up
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Forgot password?
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <a href="#" className="widget-header">
                                            <div className="icontext">
                                                <div className="icon-wrap">
                                                    <i className="text-warning icon-sm fa fa-shopping-cart"></i>
                                                </div>
                                                <div className="text-wrap text-dark">
                                                    Order <br /> Protection
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-auto">
                                        <a href="#" className="widget-header">
                                            <div className="icontext">
                                                <div className="icon-wrap">
                                                    <i className="text-warning icon-sm  fa fa-heart"></i>
                                                </div>
                                                <div className="text-wrap text-dark">
                                                    <span className="small round badge badge-secondary">
                                                        0
                                                    </span>
                                                    <div>Favorites</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>

            <section className="section-content bg padding-y-sm">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3-24">
                                    {' '}
                                    <strong>Your are here:</strong>{' '}
                                </div>
                                <nav className="col-md-18-24">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">Category name</a>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <a href="#">Sub category</a>
                                        </li>
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Items
                                        </li>
                                    </ol>
                                </nav>
                                <div className="col-md-3-24 text-right">
                                    <a
                                        href="#"
                                        data-toggle="tooltip"
                                        title="List view"
                                    >
                                        {' '}
                                        <i className="fa fa-bars"></i>
                                    </a>
                                    <a
                                        href="#"
                                        data-toggle="tooltip"
                                        title="Grid view"
                                    >
                                        {' '}
                                        <i className="fa fa-th"></i>
                                    </a>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-3-24">
                                    {' '}
                                    <strong>Filter by:</strong>{' '}
                                </div>
                                <div className="col-md-21-24">
                                    <ul className="list-inline">
                                        <li className="list-inline-item dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                            >
                                                {' '}
                                                Supplier type{' '}
                                            </a>
                                            <div
                                                className="dropdown-menu p-3"
                                                style={{ maxWidth: '400px' }}
                                            >
                                                <label className="form-check">
                                                    <a href="#">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                        />{' '}
                                                        Good supplier
                                                    </a>
                                                </label>
                                                <label className="form-check">
                                                    <a href="#">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                        />{' '}
                                                        Best supplier
                                                    </a>
                                                </label>
                                                <label className="form-check">
                                                    <a href="#">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                        />{' '}
                                                        New supplier
                                                    </a>
                                                </label>
                                            </div>
                                        </li>
                                        <li className="list-inline-item dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                            >
                                                {' '}
                                                Country{' '}
                                            </a>
                                            <div
                                                className="dropdown-menu p-3"
                                                style={{ maxWidth: '400px' }}
                                            >
                                                <label className="form-check">
                                                    <a href="#">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                        />{' '}
                                                        China
                                                    </a>
                                                </label>
                                                <label className="form-check">
                                                    <a href="#">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                        />{' '}
                                                        Japan
                                                    </a>
                                                </label>
                                                <label className="form-check">
                                                    <a href="#">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                        />{' '}
                                                        Uzbekistan
                                                    </a>
                                                </label>
                                                <label className="form-check">
                                                    <a href="#">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                        />{' '}
                                                        Russia
                                                    </a>
                                                </label>
                                            </div>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">Product type</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">Brand name</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">Color</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#">Size</a>
                                        </li>
                                        <li className="list-inline-item">
                                            <div className="form-inline">
                                                <label className="mr-2">
                                                    Price
                                                </label>
                                                <input
                                                    className="form-control form-control-sm"
                                                    placeholder="Min"
                                                    type="number"
                                                />
                                                <span className="px-2">
                                                    {' '}
                                                    -{' '}
                                                </span>
                                                <input
                                                    className="form-control form-control-sm"
                                                    placeholder="Max"
                                                    type="number"
                                                />
                                                <button
                                                    type="submit"
                                                    className="btn btn-sm ml-2"
                                                >
                                                    Ok
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="padding-y-sm">
                        <span>3897 results for "Item"</span>
                    </div>

                    <div className="row-sm">
                        <div className="col-md-3 col-sm-6">
                            <figure className="card card-product">
                                <div className="img-wrap">
                                    {' '}
                                    <img src="ui-ecommerce/images/items/1.jpg" />
                                </div>
                                <figcaption className="info-wrap">
                                    <a href="#" className="title">
                                        Good item name
                                    </a>
                                    <div className="price-wrap">
                                        <span className="price-new">$1280</span>
                                        <del className="price-old">$1980</del>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <figure className="card card-product">
                                <div className="img-wrap">
                                    {' '}
                                    <img src="ui-ecommerce/images/items/2.jpg" />
                                </div>
                                <figcaption className="info-wrap">
                                    <a href="#" className="title">
                                        The name of product
                                    </a>
                                    <div className="price-wrap">
                                        <span className="price-new">$280</span>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <figure className="card card-product">
                                <div className="img-wrap">
                                    {' '}
                                    <img src="ui-ecommerce/images/items/3.jpg" />
                                </div>
                                <figcaption className="info-wrap">
                                    <a href="#" className="title">
                                        Good item name
                                    </a>
                                    <div className="price-wrap">
                                        <span className="price-new">$280</span>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <figure className="card card-product">
                                <div className="img-wrap">
                                    {' '}
                                    <img src="ui-ecommerce/images/items/4.jpg" />
                                </div>
                                <figcaption className="info-wrap">
                                    <a href="#" className="title">
                                        Good item name
                                    </a>
                                    <div className="price-wrap">
                                        <span className="price-new">$280</span>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <figure className="card card-product">
                                <div className="img-wrap">
                                    {' '}
                                    <img src="ui-ecommerce/images/items/5.jpg" />
                                </div>
                                <figcaption className="info-wrap">
                                    <a href="#" className="title">
                                        Good item name
                                    </a>
                                    <div className="price-wrap">
                                        <span className="price-new">$1280</span>
                                        <del className="price-old">$1980</del>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <figure className="card card-product">
                                <div className="img-wrap">
                                    {' '}
                                    <img src="ui-ecommerce/images/items/6.jpg" />
                                </div>
                                <figcaption className="info-wrap">
                                    <a href="#" className="title">
                                        The name of product
                                    </a>
                                    <div className="price-wrap">
                                        <span className="price-new">$280</span>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <figure className="card card-product">
                                <div className="img-wrap">
                                    {' '}
                                    <img src="ui-ecommerce/images/items/7.jpg" />
                                </div>
                                <figcaption className="info-wrap">
                                    <a href="#" className="title">
                                        The name of product
                                    </a>
                                    <div className="price-wrap">
                                        <span className="price-new">$280</span>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <figure className="card card-product">
                                <div className="img-wrap">
                                    {' '}
                                    <img src="ui-ecommerce/images/items/1.jpg" />
                                </div>
                                <figcaption className="info-wrap">
                                    <a href="#" className="title">
                                        The name of product
                                    </a>
                                    <div className="price-wrap">
                                        <span className="price-new">$280</span>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <figure className="card card-product">
                                <div className="img-wrap">
                                    {' '}
                                    <img src="ui-ecommerce/images/items/2.jpg" />
                                </div>
                                <figcaption className="info-wrap">
                                    <a href="#" className="title">
                                        The name of product
                                    </a>
                                    <div className="price-wrap">
                                        <span className="price-new">$1280</span>
                                        <del className="price-old">$1980</del>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <figure className="card card-product">
                                <div className="img-wrap">
                                    {' '}
                                    <img src="ui-ecommerce/images/items/3.jpg" />
                                </div>
                                <figcaption className="info-wrap">
                                    <a href="#" className="title">
                                        The name of product
                                    </a>
                                    <div className="price-wrap">
                                        <span className="price-new">$280</span>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <figure className="card card-product">
                                <div className="img-wrap">
                                    {' '}
                                    <img src="ui-ecommerce/images/items/4.jpg" />
                                </div>
                                <figcaption className="info-wrap">
                                    <a href="#" className="title">
                                        The name of product
                                    </a>
                                    <div className="price-wrap">
                                        <span className="price-new">$280</span>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <figure className="card card-product">
                                <div className="img-wrap">
                                    {' '}
                                    <img src="ui-ecommerce/images/items/6.jpg" />
                                </div>
                                <figcaption className="info-wrap">
                                    <a href="#" className="title">
                                        The name of product
                                    </a>
                                    <div className="price-wrap">
                                        <span className="price-new">$280</span>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="section-footer bg-secondary">
                <div className="container">
                    <section className="footer-top padding-top">
                        <div className="row">
                            <aside className="col-sm-3 col-md-3 white">
                                <h5 className="title">Customer Services</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        {' '}
                                        <a href="#">Help center</a>
                                    </li>
                                    <li>
                                        {' '}
                                        <a href="#">Money refund</a>
                                    </li>
                                    <li>
                                        {' '}
                                        <a href="#">Terms and Policy</a>
                                    </li>
                                    <li>
                                        {' '}
                                        <a href="#">Open dispute</a>
                                    </li>
                                </ul>
                            </aside>
                            <aside className="col-sm-3  col-md-3 white">
                                <h5 className="title">My Account</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        {' '}
                                        <a href="#"> User Login </a>
                                    </li>
                                    <li>
                                        {' '}
                                        <a href="#"> User register </a>
                                    </li>
                                    <li>
                                        {' '}
                                        <a href="#"> Account Setting </a>
                                    </li>
                                    <li>
                                        {' '}
                                        <a href="#"> My Orders </a>
                                    </li>
                                    <li>
                                        {' '}
                                        <a href="#"> My Wishlist </a>
                                    </li>
                                </ul>
                            </aside>
                            <aside className="col-sm-3  col-md-3 white">
                                <h5 className="title">About</h5>
                                <ul className="list-unstyled">
                                    <li>
                                        {' '}
                                        <a href="#"> Our history </a>
                                    </li>
                                    <li>
                                        {' '}
                                        <a href="#"> How to buy </a>
                                    </li>
                                    <li>
                                        {' '}
                                        <a href="#"> Delivery and payment </a>
                                    </li>
                                    <li>
                                        {' '}
                                        <a href="#"> Advertice </a>
                                    </li>
                                    <li>
                                        {' '}
                                        <a href="#"> Partnership </a>
                                    </li>
                                </ul>
                            </aside>
                            <aside className="col-sm-3">
                                <article className="white">
                                    <h5 className="title">Contacts</h5>
                                    <p>
                                        <strong>Phone: </strong> +123456789{' '}
                                        <br />
                                        <strong>Fax:</strong> +123456789
                                    </p>

                                    <div className="btn-group white">
                                        <a
                                            className="btn btn-facebook"
                                            title="Facebook"
                                            target="_blank"
                                            href="#"
                                        >
                                            <i className="fab fa-facebook-f  fa-fw"></i>
                                        </a>
                                        <a
                                            className="btn btn-instagram"
                                            title="Instagram"
                                            target="_blank"
                                            href="#"
                                        >
                                            <i className="fab fa-instagram  fa-fw"></i>
                                        </a>
                                        <a
                                            className="btn btn-youtube"
                                            title="Youtube"
                                            target="_blank"
                                            href="#"
                                        >
                                            <i className="fab fa-youtube  fa-fw"></i>
                                        </a>
                                        <a
                                            className="btn btn-twitter"
                                            title="Twitter"
                                            target="_blank"
                                            href="#"
                                        >
                                            <i className="fab fa-twitter  fa-fw"></i>
                                        </a>
                                    </div>
                                </article>
                            </aside>
                        </div>
                        <br />
                    </section>
                    <section className="footer-bottom row border-top-white">
                        <div className="col-sm-6">
                            <p className="text-white-50">
                                {' '}
                                Made with <br /> by Vosidiy M.
                            </p>
                        </div>
                        <div className="col-sm-6">
                            <p className="text-md-right text-white-50">
                                Copyright &copy <br />
                                <a
                                    href="http://bootstrap-ecommerce.com"
                                    className="text-white-50"
                                >
                                    Bootstrap-ecommerce UI kit
                                </a>
                            </p>
                        </div>
                    </section>
                </div>
            </footer>
        </Fragment>
    );
};

export default Alibaba;
