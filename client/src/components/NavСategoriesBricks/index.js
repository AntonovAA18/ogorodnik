import React from 'react';
import {CategoriesBrick, CategoriesBricks} from "./styled";
import {NavLink} from "react-router-dom";

const NavBricks = [
    {
        id: 1,
        name: 'Садовый инвентарь',
        link: 'inventory'

    },
    {
        id: 2,
        name: 'Семена',
        link: 'seeds'

    },
    {
        id: 3,
        name: 'Удобрения',
        link: 'subcategories'

    },
    {
        id: 4,
        name: 'Категории',
        link: 'subcategories'

    },
    {
        id: 5,
        name: 'Категории',
        link: 'subcategories'

    },
    {
        id: 6,
        name: 'Категории',
        link: 'subcategories'

    },
    {
        id: 7,
        name: 'Категории',
        link: 'subcategories'

    },
    {
        id: 8,
        name: 'Категории',
        link: 'subcategories'

    },
    {
        id: 9,
        name: 'Категории',
        link: 'subcategories'

    },
    {
        id: 10,
        name: 'Категории',
        link: 'subcategories'

    },
    {
        id: 11,
        name: 'Категории',
        link: 'subcategories'

    },
    {
        id: 12,
        name: 'Категории',
        link: 'subcategories'

    }
]

const NavCategoriesBricks = props => {
    return (
        <CategoriesBricks>
            {
            NavBricks.map(({link, id, name}, index) => {
                return (
                    <NavLink to={`subcategories/${link}`} title={name}>
                        <CategoriesBrick
                            className="bg-color-grey-green cursor-pointer rounded-3xl"
                            key={id}
                            src="icons/inventory.svg"
                            alt=""
                        />
                    </NavLink>
                )
            })}
        </CategoriesBricks>
    );
};

NavCategoriesBricks.propTypes = {
    
};

export default NavCategoriesBricks;