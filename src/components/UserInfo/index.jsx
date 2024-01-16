import '../../routes/User.css'
import { useState, useContext } from 'react'
import { DarkContext } from '../../contexts/darkMode/DarkContext'

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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.7925 9.52352C21.5825 10.3136 21.5825 11.5944 20.7925 12.3845C20.0024 13.1745 18.7215 13.1745 17.9315 12.3845C17.1415 11.5944 17.1415 10.3136 17.9315 9.52352C18.7215 8.73349 20.0024 8.73349 20.7925 9.52352" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.2026 5.91236C15.4191 7.12884 15.4191 9.10115 14.2026 10.3176C12.9862 11.5341 11.0139 11.5341 9.79737 10.3176C8.58089 9.10116 8.58089 7.12885 9.79737 5.91236C11.0138 4.69588 12.9862 4.69588 14.2026 5.91236" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.06846 9.52352C6.85849 10.3136 6.85849 11.5944 6.06846 12.3845C5.27843 13.1745 3.99754 13.1745 3.20751 12.3845C2.41748 11.5944 2.41748 10.3136 3.20751 9.52352C3.99754 8.73349 5.27843 8.73349 6.06846 9.52352" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M23 19V17.904C23 16.523 21.881 15.404 20.5 15.404H19.699" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 19V17.904C1 16.523 2.119 15.404 3.5 15.404H4.301" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.339 19V17.399C17.339 15.466 15.772 13.899 13.839 13.899H10.16C8.22703 13.899 6.66003 15.466 6.66003 17.399V19" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>{user.followers} seguidores</p>
                </div>
    
                <div className={darkMode ? 'color-dark' : 'color-light'} style={{display:'flex',gap:'.5rem'}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5091 5.97423L12 6.49115L11.4908 5.97415C10.5625 5.0311 9.29461 4.50003 7.97132 4.50003C6.64804 4.50003 5.38012 5.0311 4.45182 5.97415V5.97415C2.51606 7.9634 2.51606 11.1323 4.45182 13.1215L9.84447 18.5972C10.413 19.1747 11.1896 19.5 12 19.5C12.8105 19.5 13.587 19.1747 14.1556 18.5972L19.5482 13.1216C21.4839 11.1324 21.4839 7.9635 19.5482 5.97424V5.97424C18.6199 5.03115 17.3519 4.50007 16.0286 4.50007C14.7053 4.50007 13.4374 5.03114 12.5091 5.97423Z" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>{user.following} seguindo</p>
                </div>
            </div>
        : null}

        <div className='user-contact' >
            {user.company ? 
                <div className={darkMode ? 'color-dark' : 'color-light'} style={{display:'flex',gap:'.5rem'}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6.5V9" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.5 12V10C9.5 9.44772 9.94772 9 10.5 9H13.5C14.0523 9 14.5 9.44772 14.5 10V12" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7 20.8997V13C7 12.4477 7.44772 12 8 12H16C16.5523 12 17 12.4477 17 13V20.8997" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.5 15H14.5" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.5 18H14.5" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>{user.company}</p>
                </div>
            : null}

            {user.location ? 
                <div className={darkMode ? 'color-dark' : 'color-light'} style={{display:'flex',gap:'.5rem'}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>{user.location}</p>
                </div>
            : null}

            {user.email ? 
                <div className={darkMode ? 'color-dark' : 'color-light'} style={{display:'flex',gap:'.5rem'}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 9.5L13.5736 12.6775C12.5686 13.1075 11.4314 13.1075 10.4264 12.6775L3 9.5" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <rect x="3" y="5" width="18" height="15" rx="4" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>{user.email}</p>
                </div>
            : null}

            {user.blog ? 
                <div className={darkMode ? 'color-dark' : 'color-light'} style={{display:'flex',gap:'.5rem'}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0147 18.0147L11.4853 19.5442C9.54415 21.4853 6.39697 21.4853 4.45584 19.5442V19.5442C2.51472 17.603 2.51472 14.4559 4.45584 12.5147L6.44975 10.5208C7.38743 9.58315 8.6592 9.05637 9.98529 9.05637C11.3114 9.05637 12.5831 9.58315 13.5208 10.5208" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.9852 5.98528L12.5147 4.45584C14.4558 2.51472 17.603 2.51472 19.5441 4.45584V4.45584C21.4852 6.39697 21.4852 9.54415 19.5441 11.4853L17.5502 13.4792C15.5976 15.4318 12.4317 15.4318 10.4791 13.4792" stroke="#4A5568" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <a href={user.blog}>{user.blog}</a>
                </div>
            : null}

            {user.twitter_username ? 
                <div className={darkMode ? 'color-dark' : 'color-light'} style={{display:'flex',gap:'.5rem'}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.95 9.35C19.95 8.93578 19.6142 8.6 19.2 8.6C18.7858 8.6 18.45 8.93578 18.45 9.35H19.95ZM3.60565 16.1076C3.36134 15.7731 2.89213 15.7 2.55764 15.9443C2.22314 16.1887 2.15004 16.6579 2.39435 16.9924L3.60565 16.1076ZM2.87257 15.8109C2.46438 15.8813 2.19053 16.2692 2.2609 16.6774C2.33128 17.0856 2.71924 17.3595 3.12743 17.2891L2.87257 15.8109ZM5.7 15.65L5.93829 16.3611C6.18386 16.2788 6.36961 16.0757 6.4296 15.8237C6.4896 15.5718 6.41535 15.3067 6.23322 15.1226L5.7 15.65ZM4.8 4.85L5.46058 4.49484C5.33797 4.26678 5.10639 4.1181 4.84798 4.10154C4.58958 4.08497 4.34091 4.20286 4.19018 4.4134L4.8 4.85ZM10.2 9.35L10.0229 10.0788C10.2422 10.1321 10.4739 10.0838 10.6537 9.94722C10.8334 9.81066 10.9421 9.60041 10.9496 9.37479L10.2 9.35ZM18.3 6.65L17.6738 7.06277C17.8126 7.27329 18.0479 7.4 18.3 7.4V6.65ZM21 6.65L21.624 7.06602C21.7775 6.83588 21.7918 6.53997 21.6613 6.2961C21.5307 6.05224 21.2766 5.9 21 5.9V6.65ZM18.576 8.93397C18.3462 9.27862 18.4393 9.74427 18.784 9.97404C19.1286 10.2038 19.5943 10.1107 19.824 9.76602L18.576 8.93397ZM18.45 9.35C18.45 12.362 17.5901 14.871 16.0501 16.6163C14.5204 18.3499 12.2593 19.4 9.3 19.4V20.9C12.6407 20.9 15.3296 19.7001 17.1749 17.6087C19.0099 15.529 19.95 12.638 19.95 9.35H18.45ZM9.3 19.4C7.64458 19.4 6.5374 18.9724 5.70459 18.3831C4.84887 17.7776 4.23772 16.973 3.60565 16.1076L2.39435 16.9924C3.01928 17.848 3.75813 18.8434 4.83816 19.6076C5.9411 20.388 7.35542 20.9 9.3 20.9V19.4ZM3.12743 17.2891C3.15119 17.285 3.16958 17.2806 3.17593 17.2791C3.18458 17.277 3.19158 17.2752 3.19578 17.274C3.20418 17.2718 3.21102 17.2698 3.21457 17.2687C3.22212 17.2665 3.229 17.2644 3.23345 17.263C3.24301 17.26 3.25419 17.2565 3.26552 17.2528C3.28875 17.2453 3.32054 17.2349 3.35881 17.2223C3.43573 17.197 3.54331 17.1613 3.67073 17.119C3.92579 17.0342 4.26283 16.9217 4.5986 16.8095C4.93446 16.6972 5.26937 16.5851 5.5203 16.5011C5.64577 16.4591 5.75026 16.4241 5.82338 16.3996C5.85994 16.3874 5.88866 16.3778 5.90825 16.3712C5.91804 16.3679 5.92555 16.3654 5.93061 16.3637C5.93314 16.3629 5.93506 16.3622 5.93634 16.3618C5.93699 16.3616 5.93747 16.3614 5.9378 16.3613C5.93796 16.3612 5.93808 16.3612 5.93816 16.3612C5.93821 16.3612 5.93824 16.3612 5.93826 16.3611C5.93828 16.3611 5.93829 16.3611 5.7 15.65C5.46171 14.9389 5.4617 14.9389 5.46168 14.9389C5.46166 14.9389 5.46163 14.9389 5.46159 14.9389C5.46151 14.9389 5.46139 14.939 5.46123 14.939C5.46091 14.9391 5.46042 14.9393 5.45978 14.9395C5.4585 14.9399 5.45659 14.9406 5.45407 14.9414C5.44902 14.9431 5.44152 14.9456 5.43175 14.9489C5.41219 14.9555 5.3835 14.9651 5.34697 14.9773C5.2739 15.0018 5.16949 15.0367 5.0441 15.0787C4.79331 15.1627 4.45867 15.2747 4.12315 15.3868C3.78755 15.499 3.4514 15.6111 3.19749 15.6956C3.07042 15.7378 2.96458 15.7729 2.88987 15.7975C2.85233 15.8098 2.82377 15.8192 2.80469 15.8253C2.79486 15.8285 2.78939 15.8302 2.78715 15.8309C2.78569 15.8314 2.78787 15.8307 2.79198 15.8295C2.79381 15.829 2.79923 15.8274 2.80654 15.8254C2.8102 15.8244 2.81673 15.8227 2.82499 15.8207C2.83095 15.8193 2.84904 15.815 2.87257 15.8109L3.12743 17.2891ZM6.23322 15.1226C3.48941 12.3486 3.28417 8.25559 5.40982 5.2866L4.19018 4.4134C1.64783 7.96441 1.89859 12.8734 5.16678 16.1774L6.23322 15.1226ZM4.13942 5.20515C5.31949 7.40007 7.53919 9.47516 10.0229 10.0788L10.3771 8.62121C8.40881 8.14284 6.49451 6.41793 5.46058 4.49484L4.13942 5.20515ZM10.9496 9.37479C10.9872 8.2388 11.388 7.29967 12.0242 6.64956C12.6563 6.00354 13.5621 5.6 14.7 5.6V4.1C13.1869 4.1 11.8857 4.64645 10.9521 5.60044C10.0225 6.55033 9.49883 7.8612 9.45041 9.3252L10.9496 9.37479ZM14.7 5.6C15.5057 5.6 16.0959 5.75291 16.5489 5.99467C17.0003 6.23557 17.3617 6.58935 17.6738 7.06277L18.9262 6.23723C18.5053 5.59864 17.9692 5.05243 17.2551 4.67133C16.5426 4.29109 15.6993 4.1 14.7 4.1V5.6ZM18.3 7.4H21V5.9H18.3V7.4ZM20.376 6.23397L18.576 8.93397L19.824 9.76602L21.624 7.06602L20.376 6.23397Z" fill="#4A5568"/>
                    </svg>
                    <a href={`https://twitter.com/${user.twitter_username}`}>{user.twitter_username}</a>
                </div>
            : null}
        </div>
    </div>
  )
}

export default UserInfo
