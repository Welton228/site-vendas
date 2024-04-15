import Styles from "../../styles/Head.module.css";
import instagram from "../../assets/instagram-icon.webp";
import hearts from "../../assets/instagram-hearts.webp";

const Head = () => {
  return (
    <section className={Styles.secao_principal}>
      <div className={Styles.secao_image_left}>
        <img className={Styles.instagram_left} src={instagram} alt="Instagram-icon" />
        <img className={Styles.hearts_left} src={hearts} alt="Instagram-hearts" />
      </div>
      <div className={Styles.secao_txt}>
        <h4>Pack</h4>
        <h1 lang="en">STORIES ATRATIVOS</h1>
        <h3>Seus stories nunca mais serão os mesmos!</h3>
        <img className={Styles.hearts_right} src={hearts} alt="Instagram-hearts" />
      </div>
      <div className={Styles.secao_image_right}>
        <img className={Styles.instagram_right} src={instagram} alt="Instagram-icon" /> 
      </div>
    </section>
  );
};

export default Head;
