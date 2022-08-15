import { Component } from "react"
import React from 'react';
import {Bar,Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1,2,3,4,5,6,7],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [1,2,3,4,5,6,7],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };


  


export default class Graficos extends Component{
    render(){
        return (
            <div className="col-8 container" id="Graphic-Component" align="center">
                <div>
                 <Bar options={options} data={data} />;
                </div>
                
               
                    
            </div>
        ); 
    }

}