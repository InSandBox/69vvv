import React from 'react';

export default class Mtop extends React.Component {

    

    witnessManipulatorForSearch(e) {
        var searchInput = document.getElementById("searchInput");

        if (searchInput.value === "" || searchInput.value === undefined) { return; }

        if (searchInput.tagName !== "INPUT") { return; }

        e.preventDefault();

        var pLexic = ["porn", "porno", "pornographie", "pornography"]
        var splittedSearch = searchInput.value.split(" ");

        var search = searchInput.value;

        splittedSearch.forEach((value, index)=>{
            if(pLexic.includes(value)){
                search = "PRAYGOD";
            }
        })

        var WITNESS = document.getElementById("witness")
    
        if (WITNESS) {
            WITNESS = document.getElementById("witness");
            WITNESS.setAttribute("data-link", encodeURIComponent("https://1337x.to/search/"+search+"/1/"));
            WITNESS.classList.add("link-to-cat");
            WITNESS.classList.add("search");
            WITNESS.click();
            return;
        }
    }

    render() {

        return (
            <nav id="top-nav" className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button type="button" id="sidebarCollapse" className="btn btn-info">
                        <i className="fas fa-align-left"></i>
                        <span>Navigation</span>
                    </button>
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <form className="form-inline my-2 my-lg-0">
                                <input id="searchInput" className="form-control mr-sm-2" type="search" placeholder="Search Torrent"
                                    aria-label="Search" />
                                <button onClick={this.witnessManipulatorForSearch} className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}