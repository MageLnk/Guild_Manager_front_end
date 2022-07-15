import { useEffect } from "react";

const SelectedGame = ({ temporaryUser, selectedGameOnSideBar, setselectedGameOnSideBar }) => {
  useEffect(() => {
    const isSelectedGameOnSideBar = localStorage.getItem("selectedGameOnSideBar");
    setselectedGameOnSideBar(isSelectedGameOnSideBar);
  }, []);
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
