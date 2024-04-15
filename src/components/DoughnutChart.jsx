import React from "react";
import { Doughnut } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import styles from "../styles/tokenomics.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const dataSet = [
  {
    label: "Presale",
    data: 4.76,
    backgroundColor: "rgba(65, 127, 171, 1)",
    hoverOffset: 4,
  },
  {
    label: "Partnership Funds",
    data: 6,
    backgroundColor: "rgba(128, 220, 248, 1)",
    hoverOffset: 4,
  },
  {
    label: "Secured Fund",
    data: 4.76,
    backgroundColor: "rgba(5, 137, 210, 1)",
    hoverOffset: 4,
  },
  {
    label: "Exchange & Liquidity",
    data: 19.48,
    backgroundColor: "rgba(5, 229, 254, 1)",
    hoverOffset: 4,
  },
  {
    label: "Marketing",
    data: 25,
    backgroundColor: "rgba(18, 183, 242, 1)",
    hoverOffset: 4,
  },
  {
    label: "AI Blockchain",
    data: 40,
    backgroundColor: "rgba(18, 183, 242, 1)",
    hoverOffset: 4,
  },
];

const DoughnutChart = ({ allocationOfFunds, rltStatus }) => {
  const values = {
    labels: dataSet.map((data) => `${data.data}% ${data.label}`),
    datasets: [
      {
        data: dataSet.map((data) => data.data),
        backgroundColor: dataSet.map((data) => data.backgroundColor),
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    tooltips: {
      callbacks: {
        label: function (context) {
          let label = context.dataset.labels[context.dataIndex] || "";
          if (label) {
            label += ": ";
          }
          label += context.formattedValue + "%";
          return label;
        },
      },
    },
  };

  return (
    <>
      <div className={styles.doughnutBox}>
        <Doughnut data={values} options={options} />
      </div>

      <div className={rltStatus ? "my-auto directionRTL" : "my-auto"}>
        <div className="d-none d-md-flex flex-column">
          <h3
            style={{
              fontFamily: "Russo One",
              fontSize: "20px",
            }}
          >
            {allocationOfFunds.title}
          </h3>
          <p className={styles.value}>{allocationOfFunds.subTitle}</p>
        </div>
        <div className="d-flex flex-column gap-2">
          {dataSet.map((data, index) => (
            <div className="d-flex" key={index}>
              <div
                style={{
                  height: "20px",
                  width: "20px",
                  background: data.backgroundColor,
                }}
              >
                {" "}
              </div>{" "}
              <p className={styles.chartData}> {allocationOfFunds.graphData[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DoughnutChart;
