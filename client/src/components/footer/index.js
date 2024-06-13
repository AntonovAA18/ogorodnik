import React from 'react';
import PropTypes from 'prop-types';
import YandexMap from "../yandexMap";
import {styled} from "styled-components";

const StyledFooter = styled.div`
  padding-top: 30px;
  width: max-content;
  width: -moz-available;
  width: -webkit-fill-available;
`

const Footer = props => {
    return (
        <StyledFooter className="bg-color-green">
            <YandexMap />
        </StyledFooter>
    );
};

Footer.propTypes = {
    
};

export default Footer;