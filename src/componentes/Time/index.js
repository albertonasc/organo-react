import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const corFundo = { backgroundColor: props.corSecundaria };
  const corBorda = { borderColor: props.corPrimaria };

  return (
    props.colaboradores.length > 0 && (
      <section className="time" style={corFundo}>
        <h3 style={corBorda}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo={props.corPrimaria}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
