import { useState } from 'react';
import Modal_30 from '../components/Modal_30';
import Backdrop_30 from '../components/Backdrop_30';


function Todo_30(props) {
    const [showModal, setshowModal] = useState();

    function showModalHandler() {
        setshowModal(true);
    }

    function closeModalHandler() {
        setshowModal(false);
    }

    return (

        <div>
            <div className="card">
                <h2>{props.text}</h2>
                <div className="actions">
                    <button className="btn" onClick={showModalHandler} >Delete</button>
                </div>
            </div>
            {showModal && <Backdrop_30 onClose={closeModalHandler} />}
            {showModal && <Modal_30 text='Are you sure?' onClose={closeModalHandler} />}

        </div>
    );
}

export default Todo_30;