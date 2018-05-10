import React from 'react';

const Card = ({ id, name, email }) => {
    // Distructuring the parameter was moved into the receiving parameter of function
    // const { id, name, email } = props;
    return (
        <div className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robot" src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                {/* without distructering */}
                {/* <h2>{props.name}</h2> */}
                {/* <p>{props.email}</p> */}

                {/* With distructuring */}
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>

    );
}

export default Card;