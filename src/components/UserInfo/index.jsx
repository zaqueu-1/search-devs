import '../../routes/User.css'
import { useState, useContext } from 'react'
import { DarkContext } from '../../contexts/darkMode/DarkContext'
import { GoPeople } from "react-icons/go"
import { FaRegHeart } from "react-icons/fa"
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"
import { IoLocationOutline } from "react-icons/io5"
import { MdOutlineEmail } from "react-icons/md"
import { GoLink } from "react-icons/go"
import { CiTwitter } from "react-icons/ci"

function UserInfo({user}) {

    const { darkMode } = useContext(DarkContext)

  return (
    <div className='user-info' style={darkMode ? {background:'#2B3549'} : {}}>
        <div style={{width:'248px',height:'49px',display:'flex',gap:'1rem'}}>
            <img src={user.avatar_url} alt={user.name} />
            <div className={darkMode ? 'user-nickname color-dark' : 'user-nickname color-light'} >
                <p>{user.name}</p>
                <span>@{user.login}</span>
            </div>
        </div>

        {user.bio ? 
            <p className={darkMode ? 'user-bio color-dark' : 'user-bio color-light'}>{user.bio}</p>
        : null}

        {user.followers && user.following ?
            <div className='user-follow'>
                <div className={darkMode ? 'color-dark' : 'color-light'} style={{display:'flex',gap:'.5rem'}}>
                    <GoPeople style={{width:'18px',height:'18px'}} className={darkMode ? 'icon-dark' : ''}/>
                    <p>{user.followers} seguidores</p>
                </div>
    
                <div className={darkMode ? 'color-dark' : 'color-light'} style={{display:'flex',gap:'.5rem'}}>
                    <FaRegHeart style={{width:'18px',height:'18px'}} className={darkMode ? 'icon-dark' : ''}/>
                    <p>{user.following} seguindo</p>
                </div>
            </div>
        : null}

        <div className='user-contact' >
            {user.company ? 
                <div className={darkMode ? 'user-contact-inner color-dark' : 'user-contact-inner color-light'}>
                    <HiOutlineBuildingOffice2 style={{width:'20px',height:'20px'}} className={darkMode ? 'icon-dark' : ''}/>
                    <p>{user.company}</p>
                </div>
            : null}

            {user.location ? 
                <div className={darkMode ? 'user-contact-inner color-dark' : 'user-contact-inner color-light'}>
                    <IoLocationOutline style={{width:'22px',height:'22px'}} className={darkMode ? 'icon-dark' : ''}/>
                    <p>{user.location}</p>
                </div>
            : null}

            {user.email ? 
                <div className={darkMode ? 'user-contact-inner color-dark' : 'user-contact-inner color-light'}>
                    <MdOutlineEmail style={{width:'20px',height:'20px'}} className={darkMode ? 'icon-dark' : ''}/>
                    <p>{user.email}</p>
                </div>
            : null}

            {user.blog ? 
                <div className={darkMode ? 'user-contact-inner color-dark' : 'user-contact-inner color-light'}>
                    <GoLink style={{width:'18px',height:'18px'}} className={darkMode ? 'icon-dark' : ''}/>
                    <a href={user.blog}>{user.blog}</a>
                </div>
            : null}

            {user.twitter_username ? 
                <div className={darkMode ? 'user-contact-inner color-dark' : 'user-contact-inner color-light'}>
                    <CiTwitter style={{width:'22px',height:'22px'}} className={darkMode ? 'icon-dark' : ''}/>
                    <a href={`https://twitter.com/${user.twitter_username}`}>@{user.twitter_username}</a>
                </div>
            : null}
        </div>
    </div>
  )
}

export default UserInfo
