import React from "react";
import Carousel from "./Carousel";
import Async from 'react-async';
import Cat from "./Cat";

export default class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            home: true,
            torrent: false,
            cat: false,
            dmca: false,
            contactus: false,
            upload: false,
            donate: false,
            link: "",
            rdx: 0
        };

        this.clickHandler = this.clickHandler.bind(this);
        this.mainLoad = this.mainLoad.bind(this);
        this.dataLoad = this.dataLoad.bind(this);
        this.search = false;
		this.serverAddress = "http://192.168.1.102:8080";
		//this.serverAddress = "http://localhost:8080";
    }


    incrDonwloads = () => fetch(this.serverAddress+"/newdl");


    // Your promiseFn receives all props from Async and an AbortController instance
    dataLoad = () =>
        fetch(this.serverAddress+"/home")
            .then(res => (res.ok ? res : Promise.reject(res)))
            .then(res => res.json())

    // Your promiseFn receives all props from Async and an AbortController instance
    mainLoad = ({ link }, { signal }) =>
        fetch(link, { signal })
            .then(res => (res.ok ? res : Promise.reject(res)))
            .then((res) => {
                return res.json()
            })



    async clickHandler(e) {
        var elt = e.target;
        if (elt.classList.contains('btn-info')) {
            elt.dispatchEvent(new Event('click'));
            return;
        }

        e.preventDefault();

        var rand = Math.floor(Math.random() * 998);

        if (elt.classList.contains("go-home")) {
            this.setState({
                home: true,
                torrent: false,
                cat: false,
                rdx: rand,
                dmca: false,
                contactus: false,
                upload: false,
                donate: false,
            })

            return;
        }

        if (elt.classList.contains("link-of-home")) {

            switch (elt.getAttribute("data-link")) {
                case "dmca":
                    this.setState({
                        home: false,
                        torrent: false,
                        cat: false,
                        rdx: rand,
                        dmca: true,
                        contactus: false,
                        upload: false,
                        donate: false,
                    })
                    break;
                case "contactus":
                    this.setState({
                        home: false,
                        torrent: false,
                        cat: false,
                        rdx: rand,
                        dmca: false,
                        contactus: true,
                        upload: false,
                        donate: false,
                    })
                    break;
                case "upload":
                    this.setState({
                        home: false,
                        torrent: false,
                        cat: false,
                        rdx: rand,
                        dmca: false,
                        contactus: false,
                        upload: true,
                        donate: false,
                    })
                    break;
                case "donate":
                    this.setState({
                        home: false,
                        torrent: false,
                        cat: false,
                        rdx: rand,
                        dmca: false,
                        contactus: false,
                        upload: false,
                        donate: true,
                    })
                    break;

                default:
                    break;
            }

            return;
        }


        if (!elt.classList.contains("link-to-torrent") && !elt.classList.contains("link-to-cat")) {
            return;
        }

        var link = ""

        if (elt.classList.contains("link-to-torrent"))
            link = this.serverAddress + "/torrent/";
        if (elt.classList.contains("link-to-cat")) {
            link = this.serverAddress + "/cat/";
            this.search = false;
        }
        if (elt.classList.contains("search")) {
            link = this.serverAddress + "/search/";
            this.search = true;
        }


        this.setState({
            home: false,
            torrent: elt.classList.contains("link-to-torrent"),
            cat: elt.classList.contains("link-to-cat"),
            rdx: rand,
            link: link + elt.getAttribute("data-link"),
            dmca: false,
            contactus: false,
            upload: false,
            donate: false,
        })

    }

    render() {

        if (this.state.dmca)
            return (
                <div className="container" onClick={this.clickHandler}>
                    <p id="witness"></p>
                    <h2>DMCA</h2>
                    <br />
                    <h4>
                        All parts of the 69TORX Website are for Private use only.
                         No files are Hosted on our Server, they are Indexed in a similar way to how Google works.
                          The ISP and/or Administrator cannot be held responsible for the contents of any linked Sites or any link contained in a linked Site,
                           or changes/updates to such Sites.
                    </h4>
                </div>
            )
        if (this.state.contactus)
            return (
                <div className="container" onClick={this.clickHandler}>
                    <p id="witness"></p>
                    <h3>Contact 69TORX</h3>
                    <br />
                    <h4>If you need to contact 69TORX, Send your message to 69TORX@protonmail.com </h4>
                </div>
            )
        if (this.state.upload)
            return (
                <div className="container" onClick={this.clickHandler}>
                    <p id="witness"></p>
                    <h2>Upload</h2>
                    <br />
                    <h4>69TORX is not a torrent hoster or provider. 69TORX does not host any torrent data.
                        You can not upload torrent or any files here. 69TORX is just for searching and sorting.
                        Also note that all parts of the 69TORX Website are for Private use only.
                    </h4>
                </div>
            )
        if (this.state.donate)
            return (
                <div className="container" onClick={this.clickHandler}>
                    <p id="witness"></p>
                    <h2>Donate</h2>
                    <br />
                    <h5>If you want to donate to keep this website up, use these crypto-currency addresses :</h5>
                    <br />
                    <h6>Bitcoin (BTC) :&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-primary">14ULFXpcyXjLBfeyiPjbQEu1k6Q8Di9rJT</span></h6>
                    <br />
                    <h6>Ethereum (ETH) :&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-primary">0x230998D14e22075311e813f4155A84946889FbF5</span></h6>
                    <br />
                    <h6>Litecoin (LTC) :&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-primary">MHKaPqrxisFbpwmiLuJnZScyVHXXexVrfg</span></h6>
                    <br />
                    <h6>Dash :&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-primary">XwxYgR2AmvqvK8sJXWmVKHHypKQqk6FR91</span></h6>
                    <br />
                    <h6>Ethereum Classic (ETC) :&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-primary">0x8611A64Ddbde04A447455E6e26d276Dd386F6Be6</span></h6>
                    <br />
                    <h6>Bitcoin Cash (BCH) :&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-primary">qqnzn53mksu405pqkucfqaqdsllsxythvql7dgtjs7</span></h6>
                    <br />
                    <h6>DOGECOIN (DOGE) :&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-primary">DABqeMqaKMe41NcurXZgWZ28xMh4cwKp3z</span></h6>
                    <br />
                    <h6>Ripple (XRP) : <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Address :&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-primary">rw2ciyaNshpHe7bCHo4bRWq6pqqynnWKQg</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tag :&nbsp;&nbsp;&nbsp;&nbsp; <span className="text-primary">3627506909</span></h6>

                </div>
            )













        if (this.state.cat)
            return (
                <Async promiseFn={this.mainLoad} link={this.state.link} watch={this.state.rdx} >
                    {
                        ({ data, error, isLoading }) => {
                            if (isLoading) return (
                                <p id="witness">Loading....</p>
                            )
                            if (error) return error.message
                            if (data) {
                                return (
                                    <div onClick={this.clickHandler}>
                                        <p id="witness"></p>
                                        <br />

                                        {data.dx !== undefined && <Cat search={this.search} pages={data.dp} link={this.state.link} icon={data.icon} title={data.title} data={data.dx} />}


                                    </div>
                                )
                            }
                            return null;
                        }

                    }
                </Async>
            )

        if (this.state.home)
            return (

                <Async promiseFn={this.dataLoad} watch={this.state.rdx}>
                    {
                        ({ data, error, isLoading }) => {
                            if (isLoading) return (
                                <p id="witness">Loading....</p>
                            )
                            if (error) return error.message
                            if (data)
                                return (
                                    <div onClick={this.clickHandler}>
                                        <p></p>
                                        {data.firstCar !== undefined &&
                                            <div>
                                                <p id="witness"></p>
                                                <Carousel carId="carousel-example" data={data.firstCar} />
                                                <br />
                                                <Cat icon='fa fa-star' title="MOST POPULAR TORRENTS THIS WEEK" data={data.allCats[0]} />
                                                <br />
                                                <Cat icon='fa fa-star' title="POPULAR MOVIE TORRENTS" data={data.allCats[1]} />
                                                <br />
                                                <Cat icon='fa fa-star' title="POPULAR FOREIGN MOVIE TORRENTS" data={data.allCats[2]} />
                                                <br />
                                                <Cat icon='fa fa-star' title="POPULAR TV TORRENTS" data={data.allCats[3]} />
                                                <br />
                                                <Cat icon='fa fa-star' title="POPULAR MUSIC TORRENTS" data={data.allCats[4]} />
                                                <br />
                                                <Cat icon='fa fa-star' title="POPULAR APPLICATION TORRENTS" data={data.allCats[5]} />
                                                <br />
                                                <Cat icon='fa fa-star' title="POPULAR GAME TORRENTS" data={data.allCats[6]} />
                                                <br />
                                                <Cat icon='fa fa-star' title="POPULAR OTHER TORRENTS" data={data.allCats[7]} />
                                            </div>
                                        }
                                    </div>

                                )
                            return null;
                        }
                    }
                </Async>

            )

        if (this.state.torrent)
            return (
                <Async promiseFn={this.mainLoad} link={this.state.link} watch={this.state.torrent}>
                    {
                        ({ data, error, isLoading }) => {
                            if (isLoading) return (
                                <p id="witness">Loading....</p>
                            )
                            if (error) return error.message
                            if (data)
                                return (

                                    <div onClick={this.clickHandler}>
                                        <p id="witness"></p>
                                        <div className="container">
                                            <h6>&nbsp;<i className="text-info fas fa-cloud-download-alt"></i>&nbsp;{data.name}</h6>
                                            <br />
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Category</th>
                                                        <th scope="col">Type</th>
                                                        <th scope="col">Language</th>
                                                        <th scope="col">Size</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{data.categorie}</td>
                                                        <td>{data.type}</td>
                                                        <td>{data.lang}</td>
                                                        <td>{data.size}</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Downloads</th>
                                                        <th scope="col">Date Uploaded</th>
                                                        <th scope="col">Seeders</th>
                                                        <th scope="col">Leechers</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>{data.downloads}</td>
                                                        <td>{data.date}</td>
                                                        <td className="text-success">{data.seeds}</td>
                                                        <td className="text-danger">{data.leechs}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <br />
                                            <h6 className="col-4 text-left">INFO HASH : {data.infohash}</h6>
                                            <br />

                                            <div className="container text-center">
                                                <a target="_blank" rel="noopener noreferrer" onClick={this.incrDonwloads} href={data.link1} className="btn btn-info"><i className="text-white fas fa-download"></i>&nbsp;Torrent 1</a>&nbsp;
                                                <a target="_blank" rel="noopener noreferrer" onClick={this.incrDonwloads} href={data.link2} className="btn btn-info"><i className="text-white fas fa-download"></i>&nbsp;Torrent 2</a>&nbsp;
                                                <a target="_blank" rel="noopener noreferrer" onClick={this.incrDonwloads} href={data.link3} className="btn btn-info"><i className="text-white fas fa-download"></i>&nbsp;Torrent 3</a>&nbsp;
                                                <a onClick={this.incrDonwloads} href={data.link4} className="btn btn-info"><i className="fas fa-magnet"></i>&nbsp;Magnet</a>
                                            </div>
                                        </div>
                                        {/* } */}
                                    </div>

                                )
                            return null;
                        }
                    }
                </Async>
            )
    }
}