import Styles from "../../styles/Beneficios.module.css";
import phoneCase from "../../assets/phone-case.webp";
import backgroundSales from '../../assets/background-sales.webp';
import phoneVideo01 from '../../assets/video-santorini-grecia.mp4';
import phoneVideo02 from '../../assets/video-demonstracao-produto.mp4';
import phoneBackground from '../../assets/background-phone-case.webp';
import Cards from "./Cards";

const Beneficios = () => {
  return (
    <section className={Styles.secao_externa}>
        <section className={Styles.secao_principal}>
      <div className={Styles.secao_phone_case}>
        <img className={Styles.phone_case_01} src={phoneCase} alt="" />
        <video className={Styles.phone_case_video_01} src={phoneVideo01} controls autoPlay muted></video>
        <div>
        <img className={Styles.phone_background} src={phoneBackground} alt="phone-background"/> 
        </div>
        
        <img className={Styles.phone_case_02} src={phoneCase} alt="" />
        <video className={Styles.phone_case_video_02} src={phoneVideo02} controls autoPlay muted></video>
      </div>
      <div className={Styles.secao_txt_right}>
        <h1>Benefícios</h1>
        <div className={Styles.secao_txt}>
        <h3>+ ENGAJAMENTO</h3>
        <h3>+ SEGUIDORES</h3>
        <h3>+ VENDAS</h3>
        </div> 
      </div>
    </section>
      <section className={Styles.secao_cards}>
        <Cards
          paragrafo="+ DE 10mil figurinhas divididas por nichos Com atualizações semanais,
          tópico de sugestão aberto mensalmente e um nicho novo mensal, sem
          nenhum custo adicional."
        />
        <img className={Styles.background_sales01} src={backgroundSales} alt="" />
        <Cards
          paragrafo="+100 vídeos Aesthetics virais com atualizações semanais para você
          surpreender seu público."
        />
        <img className={Styles.background_sales02} src={backgroundSales} alt="" />
        <Cards
          paragrafo="2 Bônus Incríveis para você deixar seus Stories cada vez mais
          atrativos: Fotos para fundo de Story + capas para Destaques"
        />
        <img className={Styles.background_sales03} src={backgroundSales} alt="" />
      </section>
    </section>
  );
};

export default Beneficios;
