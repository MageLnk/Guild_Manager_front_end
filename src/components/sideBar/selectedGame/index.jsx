import { useEffect } from "react";
// App
const SelectedGame = ({ temporaryUser, selectedGameOnSideBar, setselectedGameOnSideBar }) => {
  useEffect(() => {
    const isSelectedGameOnSideBar = localStorage.getItem("selectedGameOnSideBar");
    console.log(isSelectedGameOnSideBar);
    if (isSelectedGameOnSideBar !== null || isSelectedGameOnSideBar !== "initialState") {
      setselectedGameOnSideBar(isSelectedGameOnSideBar);
    }
  }, []);
  // La lógica acá es es que useEffect hace un checkeo en la localstorage para ver si existe el item
  // "selectedGameOnSideBar". Si existe, lo setea y lo aplica en el "selected" de options de abajo.
  // En caso que no haya nada, no haya un match de "value", simplemente queda el "initialState", que es
  // la primera opción.
  return (
    <select
      onChange={(e) => {
        localStorage.setItem("selectedGameOnSideBar", e.target.value);
        setselectedGameOnSideBar(e.target.value);
      }}
      className="game-list"
    >
      <option value="initialState">Games</option>
      {temporaryUser.games.map((target) => {
        if (target.status === true) {
          return (
            <option
              selected={selectedGameOnSideBar === target.name ? true : false}
              key={target.name}
              value={target.name}
            >
              {target.name}
            </option>
          );
        }
      })}
    </select>
  );
};

export default SelectedGame;
