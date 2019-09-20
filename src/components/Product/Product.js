import React from 'react';
import './styles.css';

const Product = () => {
    return (
        <div class="col-md-3">
            <figure class="card card-product">
                <div class="img-wrap">
                    <img src="https://placeimg.com/300/300/tech" />
                </div>
                <figcaption class="info-wrap">
                    <a href="#" class="title">
                        Good item name
                    </a>
                    <div class="action-wrap">
                        <a href="#" class="btn btn-primary btn-sm float-right">
                            {' '}
                            Order{' '}
                        </a>
                        <div class="price-wrap h5">
                            <span class="price-new">$1280</span>
                            <del class="price-old">$1980</del>
                        </div>
                    </div>
                </figcaption>
            </figure>
        </div>
    );
};

export default Product;
{
    /* <img src="https://placeimg.com/300/300/tech" />; */
}
