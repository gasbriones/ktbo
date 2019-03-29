import React from 'react';
import Item from '../item/Item';
import PropTypes from 'prop-types'

import './List.css'
import {connect} from "react-redux";

class List extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        let gifs = this.props.gifs.data;
        return (
            <div>
                <section className="gifs-grid justify-content-center">
                    {gifs.length > 0 && gifs.map(gif => <Item gif={gif} key={gif.id}/>)}
                </section>
            </div>
        )
    }
}


List.propTypes = {
    gifs: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
    const {gifs} = {...state};
    return {
        gifs
    }
};

export default connect(mapStateToProps)(List);




