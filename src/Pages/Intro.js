import React, { Component } from "react";
import MenuBawah from '../Components/MenuBawah'

class Intro extends Component {
  render() {
    return (
      <div>
          <h1 style={{textAlign:'center'}}>Ini Home Sebenarnya</h1>
        <div className='row container-fluid' style={{width:'100%', margin:'0px'}}>
        <div className='col-6'>
        <div className="card" style={{minWidth:'120px', maxWidth: '100%', margin:'20px', marginRight:'0px', marginLeft:'0px', padding:'0px'}}>
          <img className="card-img-top" src="https://www.dynamicinstitute.com/wp-content/uploads/2017/01/iStock-516850718.jpg" alt="Card image cap" />
          <div className="card-body" style={{padding:'0px', margin:'0px',marginBottom:'10px'}}>
            <h5 className="card-title" style={{padding:'0px', margin:'0px', textAlign:'center'}}>Ujian</h5>
          </div>
        </div>
        </div>
        <div className='col-6'>
        <div className="card" style={{minWidth:'120px', maxWidth: '100%', margin:'20px', marginLeft:'0px', marginRight:'0px', padding:'0px'}}>
          <img className="card-img-top" src="http://icons-for-free.com/free-icons/png/512/2136425.png" alt="Card image cap" />
          <div className="card-body" style={{padding:'0px', margin:'0px', marginBottom:'10px'}}>
            <h5 className="card-title" style={{padding:'0px', margin:'0px', textAlign:'center'}}>Statistik</h5>
          </div>
        </div>
        </div>
        </div>

        <div className='row container-fluid' style={{width:'100%', margin:'0px', marginBottom:'800px'}}>
        <div className='col-6'>
        <div className="card" style={{minWidth:'120px', maxWidth: '100%', margin:'20px', marginLeft:'0px', marginRight:'0px', padding:'0px'}}>
          <img className="card-img-top" src="https://www.dynamicinstitute.com/wp-content/uploads/2017/01/iStock-516850718.jpg" alt="Card image cap" />
          <div className="card-body" style={{padding:'0px', margin:'0px',marginBottom:'10px'}}>
            <h5 className="card-title" style={{padding:'0px', margin:'0px', textAlign:'center'}}>Ujian</h5>
          </div>
        </div>
        </div>
        <div className='col-6'>
        <div className="card" style={{minWidth:'120px', maxWidth: '100%', margin:'20px', marginLeft:'0px',marginRight:'0px', padding:'0px'}}>
          <img className="card-img-top" src="http://icons-for-free.com/free-icons/png/512/2136425.png" alt="Card image cap" />
          <div className="card-body" style={{padding:'0px', margin:'0px', marginBottom:'10px'}}>
            <h5 className="card-title" style={{padding:'0px', margin:'0px', textAlign:'center'}}>Statistik</h5>
          </div>
        </div>
        </div>
        </div>
        <footer className='footer' style={{position:'fixed', height: '60px', bottom:'0'}}>
        <MenuBawah />
        </footer>
      </div>
    );
  }
}

export default Intro;
