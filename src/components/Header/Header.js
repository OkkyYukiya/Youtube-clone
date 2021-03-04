import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import styles from "./Header.module.scss";
import { Store } from "../../store";
import logo from "../../assets/logo.png";

const Header = () => {
  const [term, setTerm] = useState("");
  const { globalState, setGlobalState } = useContext(Store);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?query=${term}`);
    setGlobalState({ type: "SET_TERM", payload: { term } });
  };

  useEffect(() => {
    setTerm(globalState.term);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.item}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className={styles.item}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
