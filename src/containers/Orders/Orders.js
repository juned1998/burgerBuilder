import React, { Component } from "react";
import axios from "../../axios-orders";
import Order from "../../components/Order/Order";
import WithErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
class Orders extends Component {
    componentDidMount() {
        this.props.onfetchOrders(this.props.token);
    }

    render() {
        let orders = <Spinner />;
        if (!this.props.loading) {
            orders = this.props.orders.map((order) => (
                <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price}
                />
            ));
        }
        return <div>{orders}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.tokenId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchOrders: (token) => dispatch(actions.fetchOrders(token)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WithErrorHandler(Orders, axios));
