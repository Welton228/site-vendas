import Styles from "../../styles/Depoimentos.module.css";
import Comentario01 from "../../assets/coments-01.png";
import Comentario02 from "../../assets/coments-02.webp";
import Comentario03 from "../../assets/coments-03.webp";
import Comentario04 from "../../assets/coments-04.webp";
import Comentario05 from "../../assets/coments-05.webp";
import { useState } from "react";

const Depoimentos = () => {
  const [Figurinhas] = useState([
    "Bom dia/boa tarde/boa noite",
    "Dia da semana",
    "Frases Deus",
    "Frases Motivacionais",
    "Frases Autoestima",
    "Emoji 3D",
    "Elementos",
    "Reações",
    "Sombras",
    "Sombras coloridas",
    "Épocas Festivas",
    "Café",
    "Promoções",
    "Lojista",
    "Fotografia",
    "Estética",
    "Revendedora Cosméticos",
    "Marketing",
    "Lash Designer",
    "Nail Designer",
    "Achadinhos",
    "Blogueira",
    "Fitness",
    "Jóia/Semijóias",
    "Confeitaria",
    "Cabelereiro",
    "Enfermagem",
    "Maternidade",
    "Faxina",
    "Floral",
    "Papelaria Criativa",
    "Pets/PetShop",
    "Moldura",
    "Verão",
    "Viagem",
    "Lembrete",
    "Home Office",
    "Pin",
    "Bebida",
    "Trancista",
    "Pódóloga",
    "Frases em Rose",
    "Frases em Dourado",
    "TBT",
    "Aniversário",
    "Perfumaria",
    "Feedback",
    "Achadinhos",
    "New Post",
  ]);

  return (
    <section className={Styles.secao_principal}>
       <h2>DEPOIMENTOS :</h2>
      <div className={Styles.secao_comentarios}>
        <div>
          <img src={Comentario01} alt="comentario01" />
        </div>
        <div>
          <img src={Comentario02} alt="comentario02" />
        </div>
        <div>
          <img src={Comentario04} alt="comentario03" />
        </div>
        <div>
          <img src={Comentario03} alt="comentario05" />
        </div>
        <div className={Styles.secao_comentarios_txt}>
          <h1>Duvidas Frequentes:</h1>
          <h3>COMO RECEBEREI MEU PACK APÓS A COMPRA?</h3>
          <p>
            Você receberá seu acesso de forma automática no mesmo e-mail
            informado no ato da compra.
          </p>
          <h3>QUANTO TEMPO TEREI ACESSO AO PACK?</h3>
          <p>O pack é vitalício e você não pagará por nenhuma atualização.</p>
        </div>
        <div>
          <img src={Comentario05} alt="comentario05" />
        </div>
      </div>
      <section className={Styles.secao_externa_nichos}>
      <div className={Styles.secao_btn}> 
      <button className={Styles.neon_btn}><a href="https://pay.kiwify.com.br/x2HX3NH?afid=HyxezStR" target="_blank" rel="noopener noreferrer">Adquira Já!!!</a></button>
          </div> 
      <div className={Styles.secao_nichos}> 
          <h1>ALGUNS NICHOS DE FIGURINHAS QUE VOCÊ TERÁ ACESSO:</h1>
            <ul>
              {Figurinhas.map((itens, index) => (
                <li key={index}>{itens}</li>
              ))}
            </ul>
          </div>
      </section>
    </section>
  );
};

export default Depoimentos;
