import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Image} from "react-bootstrap";
import {styled} from "styled-components";
import {HOST_NAME} from "../../constants";

const ProductCardContainer = styled.div`
    border: 2px solid var(---color-grey-green);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 350px;
`

const ProductCart = ({productData}) => {
    return (
        productData.img ? (
        <ProductCardContainer className="border-1">
            <Image className="max-h-56 h-50" src={productData.img ? typeof (productData.img) === "string" ?
                `${HOST_NAME}/${productData.img}` :
                URL.createObjectURL(productData.img) :
                null} alt=""/>
            <span className="pt-4">{productData.name}</span>
            <span>Цена: {productData.price}</span>
            <span>Описание: {productData.description}</span>
        </ProductCardContainer> ) : <> </>
    );
};

ProductCart.propTypes = {

};

export default ProductCart;