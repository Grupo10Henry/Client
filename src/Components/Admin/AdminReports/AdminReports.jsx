import { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import styles from './AdminReports.module.css'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { instance } from '../../../axios/config';

export default function AdminReports () {

const {allEvents} = useSelector((s) => s.events);
const {allUsers} = useSelector((s) => s.user);
const [allPaystubs, setAllPaystubs] = useState();

const getPaystubs = async () => {
try {
    const {data} = await instance.get(`/paystub`) // axios.get(`http://localhost:3001/paystub`) | instance.get(`/paystub`)
    console.log(data)
    return data
} catch (error) {
    console.log(error)
}
};

useEffect(() => {
    getPaystubs().then((data) => {
        setAllPaystubs(data)
    })
}, []
);

const totalSales = allPaystubs?.reduce((acc, paystub) => acc + paystub.tickets, 0);

const usersMonth = [10, 41, 35, 51, 49, 62, 69, 91, 17]

const [chart, setChart] = useState({
    series: [{
        name: "Usuarios",
        data: usersMonth
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Usuarios registrados por mes',
        align: 'center'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Lucía', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    },
});

const [bars, setBars] = useState({
    series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        title: {
        text: 'Entradas vendidas por evento',
        align: 'center'
      },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany'
          ],
        }
      },
});

    return (
        <div className={styles.reportsContainer}>
            <h1 className={styles.reportTitle}>Admin reports</h1>
            <div className={styles.reportsKPIs}>
                <div className={styles.reportsKPIsBlock}>
                <h1 className={styles.reportsKPI}>{allUsers?.length}</h1>
                <p className={styles.reportsKPIText}>Usuarios registrados</p>
                </div>
                <div className={styles.reportsKPIsBlock}>
                <h1 className={styles.reportsKPI}>{allEvents?.length}</h1>
                <p className={styles.reportsKPIText}>Eventos creados</p>
                </div>
                <div className={styles.reportsKPIsBlock}>
                <h1 className={styles.reportsKPI}>{allPaystubs?.length}</h1>
                <p className={styles.reportsKPIText}>Compras realizadas</p>
                </div>
                <div className={styles.reportsKPIsBlock}>
                <h1 className={styles.reportsKPI}>$ {totalSales?.toLocaleString()}</h1>
                <p className={styles.reportsKPIText}>Ventas</p>
                </div>
            </div>
            <div className={styles.reportsCharts}>
            <ReactApexChart className={styles.reportsUsersChart} options={chart.options} series={chart.series} type="line" height={350} />
            <ReactApexChart className={styles.reportsEventsChart} options={bars.options} series={bars.series} type="bar" height={350} />
            </div>
        </div>
    )
};