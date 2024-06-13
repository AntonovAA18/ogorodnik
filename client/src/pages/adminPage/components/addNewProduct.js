import React, { useState}from 'react';
import {HOST_NAME, API_PRODUCT} from "../../../constants";
import PropTypes from 'prop-types';
import {Form} from "react-bootstrap";
import {AddProductContainer} from "./styled"
import ProductCart from "../../../components/productCart";
import axios from "axios";

const AddNewProduct = ({categories, types}) => {
    const [newProductData, setNewProductData] = useState({
    })
    const addNewProduct = async () => {
        const newFormData = new FormData()
        newFormData.append('img', newProductData.img)
        newFormData.append('name', newProductData.name)
        newFormData.append('price', newProductData.price)
        newFormData.append('description', newProductData.description)
        newFormData.append('categoryId', newProductData.categoryId)
        newFormData.append('typeId', newProductData.typeId)
        await axios.post(`${HOST_NAME}${API_PRODUCT}`, newFormData)
        setNewProductData({})
        alert("done!")
    }
    return (
        <AddProductContainer>
            <div className="flex flex-col">
                <div className="text-xl ">Добавить товар</div>
                <Form.Label className="pt-3.5">Добавить категорию</Form.Label>
                <Form.Select
                    id="categoryId"
                    className="w-1/2"
                    name="Добавить категорию"
                    aria-label=""
                    placeholder="Добавить категорию"
                    value={newProductData.categoryId}
                    onChange={() =>setNewProductData({...newProductData, categoryId: event.target.value})}
                >
                    <option value={null}></option>
                    {
                        categories.map(({id, name}) => {
                            return (
                                <>

                                    <option id={id} value={id}>{name}</option>
                                </>
                            )
                        })
                    }
                </Form.Select>
                <Form.Label className="pt-3.5">Добавить тип</Form.Label>
                <Form.Select
                    id="typeId"
                    className="w-1/2"
                    name="Добавить тип"
                    aria-label=""
                    placeholder="Добавить тип"
                    onChange={() =>setNewProductData({...newProductData, typeId: event.target.value})}
                >
                    <option value={null}></option>
                    {
                        types.map(({id, name}) => {
                            return (
                                <option id={id} value={id}>{name}</option>
                            )
                        })
                    }
                </Form.Select>
                <Form.Label className="pt-3.5">Добавить название товара</Form.Label>
                <Form.Control
                    id="name"
                    className="w-1/2"
                    name="Добавить название товара"
                    aria-label=""
                    placeholder="Добавить название товара"
                    onChange={() =>setNewProductData({...newProductData, name: event.target.value})}
                />
                <Form.Label className="pt-3.5">Добавить описание товара</Form.Label>
                <Form.Control
                    className="w-1/2"
                    name="Добавить описание товара"
                    as="textarea"
                    aria-label=""
                    placeholder="Добавить описание товара"
                    onChange={() =>setNewProductData({...newProductData, description: event.target.value})}
                />
                <Form.Label className="pt-3.5">Добавить цену товара</Form.Label>
                <Form.Control
                    className="w-1/2"
                    name="Добавить цену товара"
                    aria-label=""
                    placeholder="Добавить цену товара"
                    onChange={() =>setNewProductData({...newProductData, price: event.target.value})}
                />
                <Form.Label className="pt-3.5">Добавить изображение товара</Form.Label>
                <Form.Control
                    id="img"
                    className="w-1/2"
                    type="file"
                    name="Добавить изображение товара"
                    aria-label=""
                    placeholder="Добавить изображение товара"
                    onChange={() =>setNewProductData({...newProductData, img: event.target.files[0]})}
                />
            </div>
            <div>
                <ProductCart
                    productData={newProductData}
                />
                <button
                    className=""
                    onClick={addNewProduct}
                >
                    отправить
                </button>
            </div>
        </AddProductContainer>
    );
};

AddNewProduct.propTypes = {
    categories: PropTypes.array,
    types: PropTypes.array
};

export default AddNewProduct;