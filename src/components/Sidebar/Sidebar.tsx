import { PencilLine } from 'phosphor-react'
import { Avatar } from '../AvatarComponents/Avatar';

import style from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img 
        className={style.cover} 
        src="https://images.unsplash.com/photo-1442458017215-285b83f65851?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
        alt="" 
      />

      <div className={style.profile}>
        <Avatar src="https://github.com/IgMrc.png"/>
        <strong>Igor Morais Costa</strong>
        <span>Auxiliar de Desenvolvimeto</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}

//<img className={style.avatar} src="https://github.com/IgMrc.png" alt="" />
        