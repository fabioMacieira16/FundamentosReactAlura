import React from 'react';
import Style from './Button.module.scss'
interface IProps {
    children: React.ReactChild;
}
class Botao extends React.Component<IProps> {
    render() {
        return (
            <button className={Style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;