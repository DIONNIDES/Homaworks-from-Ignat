import React from 'react';
import styles from './MenuToggle.module.css';

type MenuTogglePropsType = {
    callback:()=>void
}

export const MenuToggle:React.FC<MenuTogglePropsType> = (props) => {
    const{callback}=props
    return (
        <div onDoubleClick={callback} className={styles.toggleBlock}></div>
    );
};
