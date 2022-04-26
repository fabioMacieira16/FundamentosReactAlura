import React from "react"
import Button from "../Button"
import Style from './Form.module.scss'

class Form extends React.Component {
    render() {
        return (
            <form className={Style.novaTarefa}>
                <div className={Style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adiicone um novo estudo
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        placeholder="o que você quer estudar"
                        required
                    />
                </div>
                <div className={Style.inputContainer}>
                    <label htmlFor="tempo">
                        tempo
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
                <Button>
                    Adicionar
                </Button>
            </form>
        )
    }
}

export default Form;