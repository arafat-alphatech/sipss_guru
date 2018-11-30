import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Link } from "react-router-dom";
import Chart from '../Components/Graph';
import { CSVLink } from "react-csv";
import TabelNilai from "../Components/TabelNilai"
import MenuBawah from '../Components/MenuBawah'

class Dashboard extends Component {

    changeStatus(){
        this.props.getChartData().then(()=>{
            this.props.getTableDataFromAPI()
            this.props.getRawDataFromAPI()
        })
        
    }
    componentDidMount(){
        this.props.getKelasByGuru()
    }
   
    render() {
        const listMapel = this.props.listMapel;
        const listNamaKelas = this.props.listNamaKelas;
        const listPaketSoal = this.props.listPaketSoal;
        return (
            <div className="dashboard" style={{ marginTop: "50px", textAlign: "center" }}>
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6">
                        <h1 style={{color:'#00A2E5'}}>Statistik Nilai</h1>
                        <div className="row" style={{ marginTop: "50px", marginBottom:"30px", marginLeft:'10px', marginRight:'10px' }}>
                            <div className="col-md-4" style={{marginBottom:'10px'}}>
                                <select className="form-control" value={listNamaKelas.id_kelas} name="id_kelas" onChange={e => this.props.setField(e)} onClick={() => this.props.getMaPel()}>
                                    <option>Pilih Kelas</option>
                                    {listNamaKelas.map((item, key) => {
                                        return <option value={item.id_kelas} key={key}>{item.nama_kelas}</option>;
                                    })}
                                </select>
                            </div>
                            <div className="col-md-4" style={{marginBottom:'10px'}}>
                                <select className="form-control" value={listMapel.id_mapel} name="id_mapel" onChange={e => this.props.setField(e)} onClick={() => this.props.getPaketByMapel()} >
                                    <option>Pilih Mata Pelajaran</option>
                                    {listMapel.map((item, key) => {
                                        return (
                                            <option key={key} value={item.id_mapel}>{item['mapel.nama_mapel']}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className="col-md-4">
                                <select className="form-control" value={listPaketSoal.id_mapel} name="id_paket_soal" onChange={e => this.props.setField(e)} >
                                    <option>Pilih Kode Paket Soal</option>
                                    {listPaketSoal.map((item, key) => {
                                        return (
                                            <option key={key} value={item.id_paket_soal}>{item.kode_soal}</option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <Link className="btn btn-primary" onClick={() => this.changeStatus()} to='#'>
                            Lihat Statistik
                        </Link>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
                <div className="row" style={{ marginTop: "50px", marginLeft:'10px' }}>
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <Chart labels={this.props.labels} data={this.props.data}/>
                        <TabelNilai tableData={this.props.tableData}/>
                        <CSVLink style={{marginTop:"30px"}} className="btn btn-primary" data={this.props.csvData}>Get Raw Data</CSVLink>
                    </div>
                    <div className="col-md-2">

                    </div>
                </div>
                 {/* footer */}
        <footer
          className="footer"
          style={{
            position: "fixed",
            height: "55px",
            bottom: "0",
            width: "100%"
          }}
        >
          <MenuBawah />
        </footer>
        {/* footer (end) */}          
            </div>
        )
    }

}

export default connect(
    "listMapel,listNamaKelas,listPaketSoal,labels,data,csvData,tableData",
    actions
)(Dashboard);