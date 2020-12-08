import ReactFullpage from '@fullpage/react-fullpage';
import "./Eucalyptus.css"
import "./ScrollingAnimation"
import React from 'react';
import $ from 'jquery';
import CreditCardForm from "../../../components/CreditCardForm/CreditCardForm";
import Product from "../../Product/Product";
import HomeFooter from "../../HomeFooter/HomeFooter";

/*
$(window).on("load resize scroll", function() {
    $(".bg-static").each(function() {
        var windowTop = $(window).scrollTop();
        var elementTop = $(this).offset().top;
        var leftPosition = windowTop - elementTop;
        $(this)
            .find(".bg-move")
            .css({ left: leftPosition });
    });
}); */


const Eucalyptus = () => {
    return (
        <div>

            <div className="section bg-static">
                <div className="bg-move"></div>
            </div>
            <div className="section">
                The boat image is moving only when scrolling.
            </div>


        </div>


    );

}

export default Eucalyptus