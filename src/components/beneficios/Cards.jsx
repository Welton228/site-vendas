import PropTypes from 'prop-types';
import Styles from '../../styles/Cards.module.css';

const Cards = ({paragrafo}) => {
  return (
    <section className={Styles.secao_cards}>
        {paragrafo}
    </section>
  );
};

Cards.propTypes = {
    paragrafo: PropTypes.string.isRequired // Assumindo que 'paragrafo' é uma string obrigatória
  };

export default Cards;
