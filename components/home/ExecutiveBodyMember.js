import styles from './Home.module.css'
import NextImage from '../../layouts/NextImage'

export default function ExecutiveBodyMember({ member }) {
  return (
    <div className='col-lg-6 d-flex flex-column align-items-center mt-6 mt-lg-4'>
      <NextImage
        src={member.img}
        alt={member.name}
        height={300}
        width={300}
        objectFit='cover'
        className={'img-fluid rounded-circle ' + styles.avatarLarge}
      />
      <div className='text-center mt-3 p-3'>
        <h4>
          {member.linkedinUrl ? (
            <a
              href={member.linkedinUrl}
              target='_blank'
              rel='noopener noreferrer'
            >
              {member.name}
            </a>
          ) : (
            member.name
          )}
        </h4>
        <p>{member.designation}</p>
      </div>
    </div>
  )
}
