import React, {Component} from 'react';
import {Button, Col, Form} from 'reactstrap';
import PropTypes from 'prop-types';
import loadingAction from "../../redux/actionsCreators/loading_actions";
import {connect} from "react-redux";

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: ''
        }
    }

    _handleChange = (e) => {
        let key = e.target.value;
        this.setState({
            key
        })
    };

    _handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(loadingAction.loading(true));
        this.props.getData('search', 25, 'G', this.state.key);
        e.target.reset()
    };

    render() {
        return (
            <Form onSubmit={this._handleSubmit}>
                <div className="form-row">
                    <Col>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this._handleChange}
                        />
                    </Col>
                    <Col xs={2}>
                        <Button color="primary">Buscar</Button>
                    </Col>
                </div>
            </Form>
        )
    }
}

SearchForm.propTypes = {
    getData: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const {loading} = {...state};
    return {
        loading
    }
};

export default connect(mapStateToProps)(SearchForm)





