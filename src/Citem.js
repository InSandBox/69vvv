import React from 'react';

export default class Citem extends React.Component{
    render(){
        return(
            <div className={`carousel-item col-12 col-sm-6 col-md-4 col-lg-3 ${this.props.active}`}>
                <img
                src={this.props.imgLink} data-link={encodeURIComponent(`https://1337x.to${this.props.link}`)}
                className="img-fluid mx-auto d-block car-img link-to-torrent" alt="Movie"
                title={this.props.title} />
                <p className="text-center">{this.props.format} {this.props.serie} {this.props.episode}</p>
            </div>
        )
    }
}