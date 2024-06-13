import {HOST_NAME, API_CATEGORY, API_PRODUCT, API_TYPE} from "../../constants";
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Button, Form } from "react-bootstrap";
import axios from "axios";
import AddNewProduct from "./components/addNewProduct";

const AdminPage = props => {
    const [newCategory, setNewCategory] = useState({})
    const [newType, setNewType] = useState({})
    const [newProduct, setNewProduct] = useState({})
    const [types, setTypes] = useState([])
    const [categories, setCategories] = useState([])

    useEffect = async () => {
        await axios.get(`${HOST_NAME}${API_TYPE}`).then(res => {
            setTypes(res.data)
        })
        await axios.get(`${HOST_NAME}${API_CATEGORY}`).then(res => {
            setCategories(res.data)
        })
    }

    const addNewCategory = async (a) => {
        await axios.post(`${HOST_NAME}${API_CATEGORY}`, a, {newCategory}).then(res => {
            console.log(res)
            setNewCategory("")
        })
    }

    const addNewProduct = async (a) => {
        await axios.post(`${HOST_NAME}${API_PRODUCT}`, a, {newProduct}).then(res => {
            console.log(res)
            setNewProduct("")
        })
    }

    return (
        <div className="w-full">
            <div className="flex justify-between mx-3">
                    <AddNewProduct
                        categories={categories}
                        types={types}
                    />
                <div>
                </div>
            </div>
            <div className="pt-20">
            </div>
        </div>
    );
};

AdminPage.propTypes = {
    
};

export default AdminPage;