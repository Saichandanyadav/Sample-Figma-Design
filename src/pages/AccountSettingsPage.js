import '../styles/AccountSettingsPage.css'

const AccountSettingsPage = () => (
  <div className="account-settings-page">
    <h1>Account Settings</h1>
    <h2>First Name</h2>
    <input type="text" placeholder="Enter First Name" />
    <h2>Last Name</h2>
    <input type="text" placeholder="Enter Last Name" />
    <h2>Email Address</h2>
    <input type="email" placeholder="Enter Email Address" />
    <h2>Change Password</h2>
    <input type="password" placeholder="Enter New Password" />
    <input type="password" placeholder="Confirm New Password" />
    <button type="button">Save Changes</button>
  </div>
)

export default AccountSettingsPage
