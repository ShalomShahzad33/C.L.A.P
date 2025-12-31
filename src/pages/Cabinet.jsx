import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

const Cabinet = () => {
  const { id } = useParams();
  return (
    <>
      {!id && <div>Cabinet</div>}

      <Outlet />
    </>
  );
};

export default Cabinet;
