import React from "react";
import Botao from "../Button";

class Formulario extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <label>
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="o que você quer estudar"
                        required
                    />
                </div>
                <div>
                    <label>
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <div>
                    <Botao></Botao>
                </div>
            </form>
        )
    }
}

export default Formulario;