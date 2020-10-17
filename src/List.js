import React, {useState} from 'react';

function List(props) {
    const {el} = props;
    const [modal, setModal] = useState(false);

const onYesHandler =() => {
    props.deleteCard(el._id);
    setModal(false);
}

    return (
        <div>
            <li>
                {el.name}
                {''}
                {el.description}

                {modal? (
                    <>
                    <label style={{color: 'red'}}>are you sure:</label>
                    <button onClick={onYesHandler}>yes</button>
                    <button onClick={()=>setModal(false)}>no</button>
                    </>
                    ):(
                    <button onClick={()=>setModal(!modal)}>delete</button>
                )}


            </li>
        </div>
    );
}

export default List;
