import React from 'react';
import Citem from './Citem';



export default class Carousel extends React.Component {
    componentDidMount() {
        /* eslint-disable no-undef */
        setTimeout(()=>{
            $(".next").click();
        }, 6000);
        $("#carousel-example").on("slide.bs.carousel", function (e) {
            /*
                CC 2.0 License Iatek LLC 2018 - Attribution required
            */
            var $e = $(e.relatedTarget);
            var idx = $e.index();
            var itemsPerSlide = 5;
            var totalItems = $("#carousel-example .carousel-item").length;
        
            if (idx >= totalItems - (itemsPerSlide - 1)) {
              var it = itemsPerSlide - (totalItems - idx);
              for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction === "left") {
                  $("#carousel-example .carousel-item")
                    .eq(i)
                    .appendTo("#carousel-example .carousel-inner");
                } else {
                  $("#carousel-example .carousel-item")
                    .eq(0)
                    .appendTo("#carousel-example .carousel-inner");
                }
              }
            }
          });
        /* eslint-enable no-undef */
    }

    render() {
        return (

            <div className="top-content">
                <div className="container-fluid">
                    <div id={this.props.carId} className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner row w-100 mx-auto" role="listbox">


                            {

                                this.props.data.map((value, index) => (
                                    <Citem
                                        key={index}
                                        active={value.active}
                                        title={value.title}
                                        link={value.link}
                                        imgLink={value.imgLink}
                                        format={value.format}
                                        serie={value.serie}
                                        episode={value.episode}
                                    />
                                ))


                            }



                        </div>
                        <a className="carousel-control-prev" href={`#${this.props.carId}`} role="button" data-slide="prev">
                            <span className="np text-success carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href={`#${this.props.carId}`} role="button" data-slide="next">
                            <span className="next np carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}



// JSON.parse(data).firstCar.map((value, index) => (
//     <Citem 
//         key={index}
//         active={value.active}
//         title={value.title}
//         link={value.link}
//         imgLink={value.imgLink}
//         format={value.format} />
// ))