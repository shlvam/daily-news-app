import React, {Component} from 'react';

export class Loader extends Component {
    render() {
        return (
            <div className="text-center">
                <img src="./ajax-loader.gif" alt="loading" />
            </div>
        );
    }

}

export default Loader;