import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Form from '../components/form/Form';
import List from '../components/list/List';
import Loading from '../components/loading/Loading';
import {connect} from "react-redux";
import getGIFSAction from "../redux/actionsCreators/gifts_actions";
import loadingAction from '../redux/actionsCreators/loading_actions'
import getApi from "../services/getAPI";
import PropTypes from "prop-types";

class Search extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(loadingAction.loading(true));
        this.getData('trending', 25, 'G');
    }

    getData = (endpoint, limit, rating, q) => {

        getApi.getAPIResponse(endpoint, limit, rating, q).then(response => {
            let data = response.data;
            if (data) {
                this.props.dispatch(getGIFSAction.getGIFS(data.data));
                this.props.dispatch(loadingAction.loading(false));
            }
        }).catch(e => console.warn(e))
    };

    render() {
        return (
            <Container fluid>
                <Row className="justify-content-center mb-3">
                    <Col lg={2} md={4}>
                        <img src="/images/logo.svg" alt="Logo" className="img-fluid"/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={4} md={6}>
                        <Form getData={this.getData}/>
                    </Col>
                </Row>
                <List/>
                {
                    this.props.loading.status && <Loading/>
                }
            </Container>
        )
    }
}


Search.propTypes = {
    loading: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const {gifs} = {...state};
    const {loading} = {...state};
    return {
        gifs,
        loading
    }
};

export default connect(mapStateToProps)(Search)




