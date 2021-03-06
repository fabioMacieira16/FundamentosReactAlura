import Style from './List.module.scss'
import Item from '../List/Item'

export default function List() {

    const tasks = [{
        task: "React",
        time: "02:00:00",
    }, {
        task: "javaScript",
        time: "01:00:00",
    }, {
        task: "typeScript",
        time: "03:00:00",
    }]

    return (
        <aside className={Style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}
