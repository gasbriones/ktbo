import React, {Component} from 'react';
import Layout from './layouts/Layout';
import Search from './views/Search';
import {Provider} from 'react-redux';
import store from './redux/store/redux-store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Layout>
                    <Search/>
                </Layout>
            </Provider>
        );
    }
}

export default App;
