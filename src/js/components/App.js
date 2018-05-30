import React from 'react';
import Blockchain from './ecosystems/Blockchain';
import Spinner from './atoms/Spinner';
import JSSpinner from './atoms/JSSpinner';

const App = () => (
    <React.Fragment>
        <Blockchain />
        <Spinner />
        <JSSpinner />
    </React.Fragment>
);

export default App;
