import useAuth from "./hooks/useAuth"

export default function Sidebar() {
  const {isLoggedIn, saveToken} = useAuth();

  function renderUser() {
    return <div>user content</div>
  }

  function renderGuest() {
    return <div>guest content</div>
  }
  
  return (
    <div>
      {
        isLoggedIn ? renderUser() : renderGuest()
      }
    </div>
  )
}