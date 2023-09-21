import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
    );

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    Featured products and Trending Products are typically best-selling, well-reviewed, or brand new products
                    that are shown on the homepage of our site. Check out some of our favorite
                    online stores and you will love these items which are listed.
                </p>
            </div>
            <div className="bottom">
                {error
                    ? "Something went wrong!"
                    : loading
                        ? "loading"
                        : data?.map((item) => <Card item={item} key={item.id} />)}
            </div>
        </div>
    );
};

export default FeaturedProducts;