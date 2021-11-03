import { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";

const Dashboard = () => {
  const { partners } = useContext(GlobalStateContext);

  const renderTable = () => {
    return (
      partners &&
      partners.map((partner) => {
        return (
          <div key={partner.id}>
            <p>{partner.firstname}</p>
            <p>{partner.lastname}</p>
            <p>{partner.participation}</p>
          </div>
        );
      })
    );
  };

  return (
    <div>
      <h1>Sou o dashboard nesse carai</h1>
      {renderTable()}
    </div>
  );
};

export default Dashboard;
