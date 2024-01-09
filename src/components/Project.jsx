import React from 'react'

function Project(props) {

    function styleObj( isFeatured ){
        if (isFeatured){
            return ({ minHeight: '20rem', maxHeight: '20rem' })
        } else {
            return ({ minHeight: '14rem', maxHeight: '14rem' })
        }
    }

    return (
        <a href={props.link} target="_blank">
            <div className="card text-center h-100 w-100 shadow-effect">
                <img src={props.img} className="card-img profile-style" alt={props.imgAlt}
                    style={styleObj(props.isFeatured)} />
                <div
                    className="card-img-overlay p-2 d-flex flex-column justify-content-center mt-auto custom-bg">
                    <h5 className="card-title w-100 fw-bold"> {props.overlayTitle} </h5>
                    <p className="card-text w-100 fw-bold"> {props.overlayContent} </p>
                </div>
            </div>
        </a>
    )
}

export default Project;