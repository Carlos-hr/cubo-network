import { useContext } from "react";
import CloseIcon from "../../assets/CloseIcon";
import GlobalStateContext from "../../global/GlobalStateContext";
import { deletePartner } from "../../services/partner";
import { TableContainer } from "./styled";

const Table = () => {
  const { partners, getPartners } = useContext(GlobalStateContext);
  console.log(partners);

  const onClickDelete = (id) => {
    deletePartner(id, getPartners);
  };

  const tableData = () => {
    return (
      partners &&
      partners.map((partner, i) => {
        return (
          <tr key={partner.id}>
            <td>{i + 1}</td>
            <td>{partner.firstname}</td>
            <td>{partner.lastname}</td>
            <td className="part">{partner.participation}%</td>
            <td className="part">
              <CloseIcon
                className="button"
                role="button"
                onClick={() => onClickDelete(partner.id)}
              />
            </td>
          </tr>
        );
      })
    );
  };

  const renderTable = () => {
    return (
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>First name</th>
              <th>Last name</th>
              <th>Participation</th>
              <th className="del">Delete</th>
            </tr>
          </thead>
          <tbody>{tableData()}</tbody>
        </table>
      </TableContainer>
    );
  };

  return <div>{renderTable()}</div>;
};

export default Table;
