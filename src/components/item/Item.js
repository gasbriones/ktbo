import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './Item.css'

class Item extends Component {
    render() {
        const { gif } = this.props;

        return (
            <div className="gif-cell">
                <img
                    src={gif.images['fixed_height'].url}
                    alt={gif.slug}
                    className={'gif-image'}
                />
            </div>
        )
    }
}

Item.propTypes = {
    gif: PropTypes.object.isRequired
}

export default Item;


