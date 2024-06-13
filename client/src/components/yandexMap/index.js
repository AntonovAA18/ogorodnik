import React from 'react';
import PropTypes from 'prop-types';
import { YMaps, Map } from '@pbe/react-yandex-maps';

const YandexMap = props => {
    return (
        <div>
            <YMaps>
                <Map defaultState={{ center: [51.195836, 58.326390], zoom: 17 }} />
            </YMaps>
        </div>
    );
};

YandexMap.propTypes = {

};

export default YandexMap;