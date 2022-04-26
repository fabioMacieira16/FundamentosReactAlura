import React from "react"
import Style from './List.module.scss'

function List() {

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
                    <li key={index} className={Style.item}>
                        <h3>{item.task}</h3>
                        <span>{item.time}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;