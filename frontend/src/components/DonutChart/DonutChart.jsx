import randomColor from "randomcolor";
import { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import GlobalStateContext from "../../global/GlobalStateContext";
import { ChartContainer } from "./styled";

const DonutChart = () => {
  const { partners } = useContext(GlobalStateContext);

  const data = {
    labels:
      partners &&
      partners.map((partner) => `${partner.firstname} ${partner.lastname}`),
    datasets: [
      {
        label:
          partners &&
          partners.map((partner) => `${partner.firstname} ${partner.lastname}`),
        data: partners && partners.map((partner) => partner.participation),
        backgroundColor: partners && partners.map(() => randomColor()),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "right",
        labels: {
          boxWidth: 15,
        },
      },
    },
  };

  return (
    <div>
      <ChartContainer>
        {partners && <Doughnut data={data} options={options} />}
      </ChartContainer>
    </div>
  );
};

export default DonutChart;
