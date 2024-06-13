import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._products = []
        this._types = []
        this._categories = []
        this._selectedCategory = {}
        this._selectedType = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setCategories(categories) {
        this._categories = categories
    }

    setSelectedCategory(category) {
        this._selectedCategory = category
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setProducts(products) {
        this._products = products
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    setPage(page) {
        this._page = page
    }

    get products() {
        return this._products
    }

    get types() {
        return this._types
    }

    get categories() {
        return this._categories
    }

    get selectedCategory() {
        return this._selectedCategory
    }

    get selectedType() {
        return this._selectedType
    }

    get totalCount() {
        return this._totalCount
    }

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }
}