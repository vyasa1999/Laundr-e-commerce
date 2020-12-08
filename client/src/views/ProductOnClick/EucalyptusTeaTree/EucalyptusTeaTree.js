import React from 'react';
import $ from 'jquery';
import "./EucalyptusTeaTree.scss"

$(window).on("load resize scroll", function () {
    $(".bg-static").each(function () {
        var windowTop = $(window).scrollTop();
        var elementTop = $(this).offset().top;
        var leftPosition = windowTop - elementTop;
        $(this)
            .find(".bg-move")
            .css({left: leftPosition});
    });
});

const EucalyptusTeaTree = () => {
    return (
        <div className="eucalyptus">
            <head>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            </head>

            <div className="sectionEucalyptus bg-static">
                <div className="bg-move"></div>
            </div>

            <div className="sectionEucalyptus" id="p1">
                <div className="row">
                    <div className="col">
                        <div className="product">
                            <div className="mockup"></div>
                        </div>
                    </div>

                    <div className="col productInfo">
                        <h1 className='display-2'>Eucalyptus Tea Tree</h1>
                        <h2>$18.99</h2>
                        <p>A natural scent inspired by popular aromatherapy oil mixtures. Great for towels, bath robes, and
                            having a “me day.”
                        </p>
                        <a href="/products/#LPETT">Back</a>
                    </div>
                    <div className="col productInfo">
                        <h1>
                            This fragrance has hints of:
                            <ul>
                                <li>Tea Tree and Eucalyptus</li>
                                <li>Natural Herbs</li>
                                <li>Bergamot Orange</li>
                            </ul>
                        </h1>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default EucalyptusTeaTree