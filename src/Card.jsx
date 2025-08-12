import profilePic from './assets/SUNTheBaer.jpg'

function Card() {
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture"></img>
            <h2>SUNTheBaer</h2>
            <p>I'm a software engineer and I enjoy cooking and board games</p>
        </div>
    )
}

export default Card;