import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import {HOST_NAME, API_PRODUCT} from "../../constants";
import ProductCart from "../../components/productCart";
import {styled} from "styled-components";
import {Spinner} from "react-bootstrap";

const ProductBricks = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
`



const Subcategories = props => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect ( () => {
            axios.get(`${HOST_NAME}${API_PRODUCT}`).then(res => {
            setProducts(res.data)
            setLoading(false)
        })
    }, [])
    return (
            <div className="pb-md-4">
            {
                loading ?
                    (
                        <Spinner animation="border" variant="success" size="xl"/>) :(
                        <div className="">
                            <ProductBricks>
                                {
                                    products.map(product => {
                                        return (
                                            <ProductCart productData={product}/>
                                        )
                                    })
                                }
                            </ProductBricks>
                        </div>
                    )
            }
            </div>
        );
    };

Subcategories.propTypes = {

};

export default Subcategories;