import c from '../styles/card.module.css'
const Card = ({ children }, props) => {
  return (
    <>
      <div className={c.card}>
        {children}
      </div>
    </>
  );
};
export default Card;
