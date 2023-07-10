import { useNavigate } from "react-router-dom";
import { roomList } from "../mocks/reservations";

export default function locations() {
  let navigate = useNavigate();

  const onHandleClick = (id) => navigate(`/Locations/${id}`);
  return (
    <>
      {roomList.map((room) => (
        <>
          <div key={room.id}>{room.name}</div>
          <img
            src={room.imageLocation}
            alt=""
            onClick={() => onHandleClick(room.id)}
          />
        </>
      ))}
    </>
  );
}
