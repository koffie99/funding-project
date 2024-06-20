
// components/ProfileCard.js
import Image from 'next/image';

import styles from '../styles/Settingprofile.module.css';

const SettingProfile= ({photo, name, number}) => {
  return (
    <div className="flex" >
      <Image
        src={photo} // Path to your profile image
        alt="Profile Image"
        width={50}
        height={50}
        className={styles['profile-image']}
      />
      <div >
        <p className={styles['profile-name']}>{name}</p>
        <p className={styles['profile-number']}>{number}</p>
      </div>
    </div>
  );
};

export default  SettingProfile;
