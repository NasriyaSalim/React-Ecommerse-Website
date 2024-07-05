import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Data from "../products.json";
import ProductCards from './ProductCards';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import Tags from './Tags';

const showResults = "Showing 01 - 12 of 139 Results";

const Shop = () => {
    const [Gridlist, setGridlist] = useState(true);
    const [products, setProducts] = useState(Data);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const [selectedCategory, setSelectedCategory] = useState("All");
    const menuItems = ["All", ...new Set(Data.map((Val) => Val.category))];

    const filterItem = (curCat) => {
        if (curCat === "All") {
            setProducts(Data);
        } else {
            const newItem = Data.filter((newVal) => newVal.category === curCat);
            setProducts(newItem);
        }
        setSelectedCategory(curCat);
    };

    return (
        <div>
            <PageHeader title="Our Shop Page" curPage="Shop" />
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p>{showResults}</p>
                                    <div className={`product-view-mode ${Gridlist ? "gridActive" : "listActive"}`}>
                                        <a className="grid" onClick={() => setGridlist(true)}>
                                            <i className="icofont-ghost"></i>
                                        </a>
                                        <a className="list" onClick={() => setGridlist(false)}>
                                            <i className="icofont-listine-dots"></i>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <ProductCards Gridlist={Gridlist} products={currentProducts} />
                                </div>
                                <Pagination
                                    productsPerPage={productsPerPage}
                                    totalProducts={products.length}
                                    paginate={paginate}
                                    activePage={currentPage}
                                />
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search products={products} />
                                <ShopCategory
                                    filterItem={filterItem}
                                    setProducts={setProducts}
                                    menuItems={menuItems}
                                    selectedCategory={selectedCategory}
                                />
                                <PopularPost />
                                <Tags />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
