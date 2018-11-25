import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    nama_kelas: 'City'
  }

  render() {
    return (
      <div className="chart">
        <Line
          data = {{
            labels:this.props.labels,
            datasets: [
              {
                label: 'Nilai',
                backgroundColor: [
                  'rgba(255, 99, 132, 0.6)'
                ],
                data: this.props.data
              }
            ]
          }}
          options={{
            responsive: true,
            title: {
              display: this.props.displayTitle,
              text: 'Dashboard Nilai Kelas '
            },
            legend: {
              display: false
            },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  max: 100
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Persentase'
                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'No Soal'
                }
              }]
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;
