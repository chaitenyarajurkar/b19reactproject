import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        this.state = {
           cauroselImagesUrls:[
               "https://m.media-amazon.com/images/I/41IcuNkyrdL._SX300_SY300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/61-yhe06tyL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/31VM4MszXiL._SX300_SY300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/41ln2L6GfTL._SY300_SX300_QL70_FMwebp_.jpg",
            "https://m.media-amazon.com/images/I/61J9i9saB+L._AC_UY327_FMwebp_QL65_.jpg" 
           ],
           activeno:0
        }
    }

 setactiveItem = ()=>{
    const limit = this.state.cauroselImagesUrls.length -1;
     this.setState(prevState=>({
          ...prevState,
          activeno: prevState.activeno === limit ? 0 : prevState.activeno -1
     }));
}

    render() {

          const {activeno,cauroselImagesUrls} = this.state;

        return (
            <div className='container border mt-3 shadow p-3 mb-5 bg-white rounded'>
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner text-center">
                        {cauroselImagesUrls.map((imageurl,index)=>{
                            return(

                        <div key={index} className={activeno ===index ? "carousel-item active" :"carousel-item"}>
                            <img className="d-block mx-auto" style={{height:"300px",objectFit:"contain"}}  src={imageurl} alt="First slide" />
                        </div>
                            )
                        })}
                        
                    </div>
                    <p className="carousel-control-prev" style={{color:'red'}} onClick={()=>this.setactiveItem()}>
                        <span className="sr-only"  >Previous</span>
                        <span className="carousel-control-prev-icon">Previous</span>
                    </p>
                    <p className="carousel-control-next"  style={{color:'red'}} onClick={()=>this.setactiveItem()}>
                        <span className="carousel-control-next-icon">Next</span>
                        <span className="sr-only "  >Next</span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;
