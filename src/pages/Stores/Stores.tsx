import React, {Component} from 'react';
import './Stores.scss';

export class Stores extends Component {
    render() {
        return (
            <div>
                Magasins
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Stores;
