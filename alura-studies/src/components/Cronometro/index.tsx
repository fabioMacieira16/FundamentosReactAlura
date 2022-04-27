import Button from "../Button";
import Relogio from "./Relogio/Index";
import style from "./Cronometro.module.scss";

export default function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titule}>Escolha um card e inicie o cronomêtro</p>
            <div className={style.relogioWrapper}>
                <div>
                    <Relogio />
                </div>
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}