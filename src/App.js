import React, {useState} from 'react';
import axios from "axios";
import List from "./List";

function App() {
    const [list, setList] = useState([]);
    console.log(list)

    const getList = () => {
        axios.get('https://nazarov-kanban-server.herokuapp.com/card')
            .then(res => {
                setList(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }
    const deleteCard = async (id) => {
        await axios.delete(`https://nazarov-kanban-server.herokuapp.com/card/${id}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        getList()
    }
    const createCard = async () => {
        await axios.post('https://nazarov-kanban-server.herokuapp.com/card', {
            name: 'we are',
            description: 'family'
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
        getList()
    }


    return (
        <div>
            <button onClick={createCard}>create</button>

            <button onClick={getList}>get</button>
            <hr/>
            {list.map(el =>
                <List el={el} deleteCard={deleteCard}/>
                )}
        </div>
    );
}

export default App;
