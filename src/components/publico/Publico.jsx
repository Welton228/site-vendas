import Styles from "../../styles/Publico.module.css";
import love from '../../assets/love-emoji.webp';
import loveMessage from '../../assets/love-message.webp';
import stars from '../../assets/stars.webp';
import breakfast from '../../assets/breakfast.jpg';
import scrambleEggs from '../../assets/scramble-eggs.jpg';

const Publico = () => {
  return (
    <section className={Styles.secao_principal}>
      <section className={Styles.secao_txt}>
        <h1>Engaje com o seu Público</h1>
        <p>Cansada de ser ignorada e falar sozinha nos Stories?
            Isso acontece porque você não está fazendo
            Stories envolventes o suficiente para
            gerar desejo no seu público!
        </p>
        <img className={Styles.star_emoji} src={stars} alt="stars" />
        <img className={Styles.love_message} src={loveMessage} alt="love-message" />
        <img className={Styles.love_emoji} src={love} alt="love" />
      </section>
      <div className={Styles.secao_image}>
        <img src={breakfast} alt="breakfast"/>
        <img src={scrambleEggs} alt="scramble-eggs"/>
      </div>
    </section>
  );
};

export default Publico;
