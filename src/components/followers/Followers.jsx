import phoneCase from '../../assets/phone-case.webp';
import Styles from '../../styles/Followers.module.css';
import phoneBackground from '../../assets/background-phone-case.webp';
import phoneVideo from  '../../assets/video-divulgacao.mp4';

const Followers = () => {
  return(
    <section className={Styles.secao_principal}>
        <section className={Styles.secao_txt}>
        <h1>Surpreenda seus seguidores</h1>
        <p>Com mais de 10 mil figurinhas organizadas
            por nichos e mais de 100 vídeos Aesthetics, surpreenda
            seus seguidores e aumente suas vendas!
        </p>
        </section>
        <div className={Styles.secao_image}>
            <img className={Styles.phone_background} src={phoneBackground} alt="phone-background"/>
            <img className={Styles.phone_case} src={phoneCase} alt="phone-case" />
            <video className={Styles.secao_video}  src={phoneVideo} controls autoPlay muted></video>
               
        </div>
    </section>
  ) ;
};

export default Followers;
