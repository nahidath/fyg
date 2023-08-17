'use client';

import styles from '../css/card.module.css';
import PlatformIcon from "@/app/components/PlatformIcon";
import {useState} from "react";
import Modal from "@/app/components/Modal";


const Card = ({ name, id, image_url, platforms }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <>
        <div className={styles.card} key={id} onClick={openModal}>
            <div className={styles.cardImage} style={{backgroundImage:'url('+image_url+')'}}>
            </div>
            <div className={styles.cardContent}>
                <div className={styles.platform}>
                    {/*{platforms.map((platform, index) => (*/}
                    {/*    */}
                    {/*))}*/}
                    <PlatformIcon  platform={platforms} size={20} style={{marginRight: 4}} />

                </div>
                <div className={styles.cardTitle}>{name}</div>
            </div>

        </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} gameID={id}/>
            </>
    );
}

export default Card;