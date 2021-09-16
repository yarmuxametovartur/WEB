import React from 'react';

const Profile = () => {
    return (
        <div className="content">
            <div className="avatar">
                <img src="https://media.istockphoto.com/vectors/male-avatar-profile-picture-vector-vector-id588258370" alt="#" />
            </div>

            <div className="about-me">
                <h2>Artur Yarmukhametov</h2>
                <p>Date of birth: 18.12.1998</p>
                <p>City: Ufa</p>
                <p>Education: USATU (Ufa State Aviation Technical University) 2020</p>
            </div>

            <div className="my-post">
                <h2>My posts</h2>
                <div className="new-post">
                    <input type="text" placeholder="Your news..." />
                    <button>Send</button>
                </div>
            </div>

            <div className="posts">
                <div className="first-post">
                    <img src="https://s.pfst.net/2017.06/573307367567338c64d039da5900969936d2fa41d1d6_b.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="second-post">
                    <img src="https://s.pfst.net/2017.06/573307367567338c64d039da5900969936d2fa41d1d6_b.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;