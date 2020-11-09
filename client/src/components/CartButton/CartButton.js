import React from 'react';
import Icon from "@mdi/react"
import {mdiCartOutline} from "@mdi/js"

function CartButton({className, icon, onClick}) {
    return (
        <div>
            <a onClick={onClick} className={`${className} cart-button`}>
                <Icon path={mdiCartOutline} title="Shopping Cart" size={2} color="white"/>
            </a>
        </div>
    )
}

export default CartButton;