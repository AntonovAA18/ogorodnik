import React from 'react';
import PropTypes from 'prop-types';
import {Logo, HeaderStyle, Contacts} from './styled';
import {CONTACT_PHONE_1, ADDRESS_1} from '../../constants';

const Header = props => {
    return (
        <HeaderStyle>
            <Logo src={"/logo/ogorodnikLogo.png"} alt=""/>
            <Contacts>
                <div>
                    {CONTACT_PHONE_1}
                </div>
                <div>
                    {ADDRESS_1}
                </div>
            </Contacts>
        </HeaderStyle>
    );
};

Header.propTypes = {

};

export default Header;