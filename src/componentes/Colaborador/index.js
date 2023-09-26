import "./Colaborador.css";

const Colaborador = ({ nome, imagem, cargo }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h3>{cargo}</h3>
      </div>
    </div>
  );
};

export default Colaborador;
