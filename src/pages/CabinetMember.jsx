import { useParams } from "react-router-dom";

const CabinetMember = () => {
  const { id } = useParams();

  return (
    <>
      <div>CabinetMember: {id}</div>
    </>
  );
};

export default CabinetMember;
