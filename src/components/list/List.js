import React from 'react';
import Item from '../item/Item';
import PropTypes from 'prop-types'
import {Col, Row} from 'reactstrap';

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
                <Row>
                    <Col>
                        <h3>{this.props.title}</h3>
                    </Col>
                </Row>
                <section className="gifs-grid justify-content-center">
                    {gifs.length > 0 && gifs.map(gif => <Item gif={gif} key={gif.id}/>)}
                </section>
            </div>
        )
    }
}


List.propTypes = {
    gifs: PropTypes.object.isRequired,
    title:PropTypes.string.isRequired
}

const mapStateToProps = state => {
    const {gifs} = {...state};
    const {title} = {...state.title};

    return {
        gifs,
        title
    }
};

export default connect(mapStateToProps)(List);




