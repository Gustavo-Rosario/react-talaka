import * as React from 'react';

import './BookLoader.scss';

const BookLoader = ():JSX.Element => {
    return (
        <div className="loader">
            <div className="book">
                <figure className="page"></figure>
                <figure className="page"></figure>
                <figure className="page"></figure>
                <figure className="page"></figure>
            </div>
        </div>

    );
}

export default BookLoader;