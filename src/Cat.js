import React from 'react';

export default class Cat extends React.Component {

    constructor(props) {
        super(props);
        this.links = []
        
    }

    
    componentDidMount() {
        /* eslint-disable no-undef */
        $('#data_table').DataTable({
            "paging": false,
            "info": false
        })
        /* eslint-enable no-undef */
    }

    render() {
        return (
            <div>
                <h4 className="tops"><i className={`text-info ${this.props.icon}`}></i>{this.props.title}</h4>
                <table className="table table-striped" id={this.props.pages !== undefined ? "data_table" : ""}>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Seeds</th>
                            <th scope="col">Leeches</th>
                            <th scope="col">Size</th>
                            <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.data.map((value, index) => (
                                <tr key={index}>
                                    <th scope="row">
                                        <a href="meow" className="icon">
                                            <i className={`link-to-cat ${value.catIcon}`} data-link={encodeURIComponent(`https://1337x.to${value.catLink}`)} ></i>
                                        </a>
                                    </th>
                                    <td>
                                        <a className="link-to-torrent" href="meow" data-link={encodeURIComponent(`https://1337x.to${value.link}`)}>
                                            {value.name}
                                        </a>
                                    </td>
                                    <td className="text-success">{value.seeds}</td>
                                    <td className="text-danger">{value.leeches}</td>
                                    <td>{value.size}</td>
                                    <td>{value.date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                {this.props.data.length!==0 && this.props.pages &&

                    <div className="container">
                        <nav aria-label="Page navigation example ">
                            <ul className="pagination justify-content-center ">
                                {
                                    this.props.pages.map((value, index) => (
                                        <li key={index} className={`page-item ${value.active}`}><a data-link={encodeURIComponent(`https://1337x.to${value.link}`)} className={`link-to-cat page-link ${this.props.search ? "search" : ""}`} href="/meow">{value.value}</a></li>
                                    ))
                                }
                            </ul>
                        </nav>

                    </div>
                }
            </div>
        )
    }
}