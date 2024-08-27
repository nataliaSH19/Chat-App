import React from 'react'
import './Sidebar.css'

const Conversation = () => {
  return (
    <>
      <div class="user-card">
        <div class="avatar online">
            <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="user avatar" class="avatar-img" />
        </div>

        <div class="user-info">
            <div class="user-header">
                <p class="user-name">John Doe</p>
                <span class="user-status">🎃</span>
            </div>
        </div>
    </div>

<hr class="divider" />

    </>
  )
}

export default Conversation
