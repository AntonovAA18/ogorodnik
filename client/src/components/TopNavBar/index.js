import React from 'react';
import {NavLink} from "react-router-dom";
import {styled} from "styled-components";
import './style.css'

const navLinks = [
    {
        id: 1,
        name: 'Категории',
        link: 'mainPage'
    },
    {
        id: 2,
        name: 'Категории',
        link: 'subcategories'
    },
    {
        id: 3,
        name: 'Категории',
        link: 'subcategories'
    },
    {
        id: 4,
        name: 'Категории',
        link: 'AboutUs'
    }

]

const StyledNavLink = styled(NavLink)`
  padding: 10px 10px 10px 10px;
`

const TopNavBar = props => {
    return (
        <div className="bg-color-green flex w-100">
            {
                navLinks.map(({id, name, link}, index) => {
                    return (
                    <StyledNavLink
                        id="sidebar"
                        className=""
                    >
                        <StyledNavLink
                            id={`${id}`}
                            to={`/${link}`}
                        >
                            {name}
                        </StyledNavLink>
                    </StyledNavLink>
                )})
            }
        </div>
    );
};

export default TopNavBar;
