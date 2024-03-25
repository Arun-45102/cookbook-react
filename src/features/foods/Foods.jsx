import { useLoaderData } from "react-router-dom";
import { getTrivia } from "../../services/apiFood";
import styles from "./Foods.module.scss";

function Foods() {
  const trivia = useLoaderData();
  // console.log(trivia);
  return <h3 className={styles.heading}>{trivia.text}</h3>;
}

export async function loader() {
  const trivia = await getTrivia();
  return trivia;
}

export default Foods;
