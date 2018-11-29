import React, { Component } from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import { Link } from "react-router-dom";
import Chart from '../Components/Graph';
import SimpleTable from '../Components/Table';
import { CSVLink } from "react-csv";

class Dashboard extends Component {

    changeStatus(){
        this.props.getChartData().then(()=>{
            this.props.getTableDataFromAPI()
            this.props.getRawDataFromAPI()
        })
        
    }
   
    render() {
        const listMapel = this.props.listMapel;
        const listNamaKelas = this.props.listNamaKelas;
        const listPaketSoal = this.props.listPaketSoal;
        const tableData = this.props.tableData;
        return (
            <div className="dashboard" style={{ marginTop: "50px", textAlign: "center" }}>
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-6">
                        <h1>Dashboard Nilai</h1>
                        <div className="row" style={{ marginTop: "50px", marginBottom:"30px" }}>
                            <div className="col-md-4">
                                <select className="form-control" value={listNamaKelas.id_kelas} name="id_kelas" onChange={e => this.props.setField(e)} onClick={() => this.props.getMaPel()}>
                                    <option>Pilih Kelas</option>
                                    {listNamaKelas.map((item, key) => {
                                        return <option value={item.id_kelas} key={key}>{item.nama_kelas}</option>;
                                    })}
                                </select>
                            </div>
                            <div className="col-md-4">
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
                                    <option>Pilih Paket Soal</option>
                                    {listPaketSoal.map((item, key) => {
                                        return (
                                            <option key={key} value={item.id_paket_soal}>{item.kode_soal}</option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <Link className="btn btn-primary" onClick={() => this.changeStatus()} to='#'>
                            Show Chart
                        </Link>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
                <div className="row" style={{ marginTop: "50px" }}>
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <Chart labels={this.props.labels} data={this.props.data}/>
                        {/* <SimpleTable/> */}
                        <CSVLink style={{marginTop:"30px"}} className="btn btn-primary" data={this.props.csvData}>Get Raw Data</CSVLink>
                    </div>
                    <div className="col-md-2">

                    </div>
                </div>              
            </div>
        )
    }

}

export default connect(
    "listMapel,listNamaKelas,listPaketSoal,labels,data,csvData",
    actions
)(Dashboard);