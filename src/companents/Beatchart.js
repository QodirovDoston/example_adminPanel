// import React from 'react'
// import Chart from 'chart.js';

// class ChartComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.chartRef = React.createRef();
//     }

//     componentDidMount() {
//         const myChartRef = this.chartRef.current.getContext("2d");

//         new Chart(myChartRef, {
//             type: 'line',
//             data: {
//                 labels: ["January", "February", "March", "April", "May", "June", "July"],
//                 datasets: [{
//                     label: "Sales",
//                     data: [86, 114, 106, 106, 107, 111, 133],
//                     borderColor: "#3e95cd",
//                     fill: false
//                 }]
//             },
//             options: {
//                 legend: {
//                     display: false
//                 },
//                 scales: {
//                     xAxes: [{
//                         scaleLabel: {
//                             display: true,
//                             labelString: 'Month'
//                         }
//                     }],
//                     yAxes: [{
//                         scaleLabel: {
//                             display: true,
//                             labelString: 'Value'
//                         }
//                     }]
//                 }
//             }
//         });
//     }

//     render() {
//         return (
//             <canvas
//                 id="myChart"
//                 ref={this.chartRef}
//             />
//         )
//     }
// }