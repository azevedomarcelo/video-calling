import { useState } from 'react';
import { RiPencilFill } from 'react-icons/ri';

import { data } from './config';

import './App.css';

function App() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false)
  const [avatarImage, setAvatarImage] = useState(data[0].logo)
  const [nickname, setNickname] = useState('')

  const showModalState = () => {
    setShowModal(!showModal);
  }

  const handleChangeAvatar = () => {
    setAvatarImage(data[activeImageIndex].logo);
    showModalState();
  }

  return (
    <div className="content">
      <h1 className="title-page">Escolha um nome e um ícone</h1>
      <div className="avatar-input">
        <img id="avatar" src={avatarImage} alt="avatar" />
        <div className="avatar" onClick={showModalState}>
          <RiPencilFill />
        </div>
      </div>

      <input
        type="text"
        name="nickname"
        className="input-name"
        id="nickname"
        placeholder="Insira seu nome"
        onChange={(e) => setNickname(e.target.value)}
        value={nickname}
      />

      {showModal && (
        <section className="modal-body">
          <h1 className="title-modal">AVATAR</h1>
          <div className="modal-image">
            {data.map((image, index) => (
              <img
                key={image.id}
                src={image.logo}
                alt={image.alt}
                className={
                  activeImageIndex === index ? "image active" : "image"
                }
                onClick={() => setActiveImageIndex(index)}
              />
            ))}
          </div>
          <button className="buttonConfirm" onClick={handleChangeAvatar}>
            CONFIRMAR
          </button>
        </section>
      )}

      <button
        className="buttonEnter"
        onClick={() => alert(`Bem vindo(a) ${nickname}`)}
      >
        ENTRAR
      </button>
    </div>
  );
}

export default App;
