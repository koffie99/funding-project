// components/ProfileCard.js
import Image from 'next/image';
import styles from './styles/Profilecard.module.css';

const Profilecard = ({photo, name, role}) => {
  return (
    <div className={styles['profile-card']} >
      <Image
        src={photo} // Path to your profile image
        alt="Profile Image"
        width={50}
        height={50}
        className={styles['profile-image']}
      />
      <div className={styles['profile-info']}>
        <p className={styles['profile-name']}>{name}</p>
        <p className={styles['profile-role']}>{role}</p>
      </div>
    </div>
  );
};

export default Profilecard;
