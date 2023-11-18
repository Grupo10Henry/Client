import { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import styles from './AdminReports.module.css'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { instance } from '../../../axios/config';
import { getReportNames, getReportSeats } from '../../../redux/reportSlice';

export default function AdminReports () {

const dispatch = useDispatch();
const {reportSeats, reportNames} = useSelector((s) => s.report)
const {allEvents} = useSelector((s) => s.events);
const {allUsers} = useSelector((s) => s.user); // const allUsers = []
const [allPaystubs, setAllPaystubs] = useState();
// const [purchasedSeats, setPurchasedSeats] = useState();
// const [purchasedSeatsEvent, setPurchasedSeatsEvent] = useState();

const getPaystubs = async () => {
try {
    const {data} = await instance.get(`/paystub`) // axios.get(`http://localhost:3001/paystub`) | instance.get(`/paystub`)
    // console.log(data)
    return data
} catch (error) {
    console.log(error)
}
};

const getPurchasedSeats = async () => {
try {
  const {data} = await axios.get(`http://localhost:3001/seat/reportSeats`) // axios.get(`http://localhost:3001/seat/reportSeats`) | instance.get('/seat/reportSeats')
  // console.log(data)
  return data
} catch (error) {
  console.log(error)
}
};

const getPurchasedSeatsEvent = async () => {
  try {
    const {data} = await axios.get(`http://localhost:3001/seat/reportNames`) // axios.get(`http://localhost:3001/seat/reportNames`) | instance.get('/seat/reportNames')
    // console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
  };

useEffect(() => {
  getPaystubs().then((data) => {
      setAllPaystubs(data)
  })
  getPurchasedSeats().then((data) => {
    dispatch(getReportSeats(data))
  })
    getPurchasedSeatsEvent().then((data) => {
      dispatch(getReportNames(data))
    })
}, []
);

const totalSales = allPaystubs?.reduce((acc, paystub) => acc + paystub.tickets, 0);

// Convertir AllUsers en array de users por mes empezando en noviembre
const monthlyUserCounts = allUsers?.reduce((counts, user) => {
  const createdAt = new Date(user.createdAt);
  let month = createdAt.getMonth() - 10;
  
  if (month < 0) {
    month += 12;
  }
  
  counts[month] = (counts[month] || 0) + 1;
  return counts;
}, Array.from({ length: 12 }).fill(0));

if (!allUsers) {
  monthlyUserCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};

// console.log(allUsers)
// console.log(monthlyUserCounts)
console.log(reportSeats)
console.log(reportNames)

const [chart, setChart] = useState({
    series: [{
        name: "Usuarios",
        data: monthlyUserCounts
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
        categories: ['Nov', 'Dic', 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'],
      }
    },
});

const [bars, setBars] = useState(
  {
    series: [{
        data: reportSeats
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
          categories: reportNames,
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