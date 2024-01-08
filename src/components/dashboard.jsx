import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './dashboard.css'

const option = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 1,
        }
    },
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: ' Revenue for November 2019',
            position: 'bottom'
        }
    }
}

const data = {
    labels: ["Everett", "Seatle", "Lynnwood", "Bothell", "Mukiletto", "Edmonds"],
    datasets: [
        {
            data: [60000, 50000, 39000, 37000, 35500, 29000],
            backgroundColor: "rgb(65, 191, 154)", 
        }

    ],

};

const data2 = {
    labels:["Service Plumbing", "Bid Work HVAC", "Service HVAC", "Bid Working Plumbing", "HWT Replacement", "Maintenance","Material Sale"],
    datasets: [
      {
        data: [ 141000, 90000, 59000,58000, 42000,41000,2000],
        backgroundColor: "rgb(65, 191, 154)", 
    }
  
    ],
  
  };

const dashboard = () => {
    
    return (
        <div className="dashboard">
            <div className='cm'>
                <p>Company Metrics</p>
            </div>
            <div className='chart1'>
                <div className='cards'>
                    <p id='pm1'>$406,411.29</p>
                    <p>Total Revenue</p>
                </div>
                <div className='cards'>
                    <p id='data'>$620</p>
                    <p>Total Jobs Avg</p>
                </div>
                <div className='cards'>
                    <p id='data'>$655</p>
                    <p>Tickets Created</p>
                </div>
                <div className='cards'>
                    <p id='data'>$735</p>
                    <p>Tickets Scheduled</p>
                </div>
            </div>
            <div className='chart1'>
                <div className='cards'>
                    <p id='pm2'>$110,228.8</p>
                    <p>Outstanding Amount</p>
                </div>
                <div className='cards'>
                    <p id='data'>$105</p>
                    <p>Memberships Sold</p>
                </div>
                <div className='cards'>
                    <p id='data'>$436</p>
                    <p>Jobs Completed</p>
                </div>
                <div className='cards'>
                    <p id='data'>$65</p>
                    <p>Total Canceled</p>
                </div>
            </div>
            <div className='ch'>
                <p id='c1'>Revenue By Job Location</p>
                <p id='c2'>Revenue By Job Type</p>
            </div>
            <div className= 'bc' style={{ display: 'flex' }}>
                <div style={{ backgroundColor: 'white', width: 600, margin: '0px 55px 0px 30px', padding: 30, legend: false, height: 300 }}>
                <div className="bar-chart">
            <Bar options={option} data={data} />
        </div>
                </div>
                <div style={{ backgroundColor: 'white', width: 600, margin: '0px 30px 0px 90px', padding: 30, legend: false, height: 300 }}>
                <div className="bar-chart">
            <Bar options={option} data={data2} />
        </div>
                </div>
            </div>
        </div>

    );
};

export default dashboard;
