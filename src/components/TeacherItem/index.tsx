import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/957790?s=460&u=b1a8c39346d55d1e598c93ee73d46f5b0f715780&v=4" alt="Thiago MAcahyba"/>
            <div>
                <strong>Thiago Macahyba</strong>
                <span>Física</span>
            </div>
        </header>
        
        <p>Ipsen Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus maxime quas! <br /><br />Cumque provident praesentium animi eveniet eaque? Nobis sequi ut dolores ipsa fuga distinctio, nemo doloribus perspiciatis voluptas omnis!</p>

        <footer>
            <p>
                Preço/Hora
                <strong>R$ 100,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="WhatsApp"/>
                Entrar em contato
            </button>
        </footer>
    </article>

    )
}

export default TeacherItem;