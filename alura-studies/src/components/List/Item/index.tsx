import Style from '../List.module.scss'

export default function Itens({ task, time }: { task: string, time: string }) {
    return (
        <li className={Style.item}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}