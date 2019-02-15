import React from  'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {fetchProducts} from '../../actions'

class ProductList extends React.Component {

}

const mapStateToProps = (state)=> {
    return {
        products
    }
}

export default connect()(ProductList)