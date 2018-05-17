import React from 'react';

// To use internal CSS in react just use the Style attribute and pus the CSS in double {{}}
// If no props are passed we always receive the children attribute.

const Scroll = (props) => {

    return (
        <div style={{overflowY: 'scroll', height: '475px'}}>
            {props.children}
        </div>
    );

};

export default Scroll;