import React from 'react';

const PageNotFound = () => {

    const pageStyle={
        paddingTop: "10vmin",
        textAlign: "center"
    }

    const imageStyle={
        width: "80vmin"
    }

    return (
        <div style={pageStyle} id="pageNotFound" >
            <img style={imageStyle} src="https://www.joulin.com/images/404.png"/>
        </div>        
    )
}

export default PageNotFound;