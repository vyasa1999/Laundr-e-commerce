import React from 'react';
import {Link} from 'react-router-dom';
import './ProductDescription.scss';
import Icon from "@mdi/react"
import {mdiCartOutline} from "@mdi/js"

// Test the push
// Yes this is the new push
const ProductDescription = () => {

    const AddToCart = () => {
        // Add items to cart
    }


    return (
        <div class="product_content">
            <div className="grid">

                <div className="upper_animation_grid_row">
                    // Animation implementation
                </div>

                <div className="lower_description_grid_row">
                    <h2>This fragrance has hints of:</h2>
                    <ul>
                        // Replace description with data from Json
                        <li>Crisp Cucumber</li>
                        <li>Sweet Melon</li>
                        <li>Cool Grapefruit</li>
                    </ul>

                </div>

            </div>

            <div className="product_footer">
                <button onClick={AddToCart}>
                    ADD TO CART
                </button>
            </div>

            <div className="product_content_navigation_product_next"> </div>

        </div>
    )
}

export default ProductDescription;
