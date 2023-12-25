import React from 'react';

function Profile() {
  return (
    <div className="offcanvas offcanvas-start show" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasLabel">User Profile</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        {/* User Profile Content */}
        <div className="text-center">
          {/* User Profile Picture */}
          <img src="user-profile-picture.jpg" alt="User Profile" className="img-fluid rounded-circle mb-3" width="100" />

          {/* User First and Last Name */}
          <h4 className="mb-3">John Doe</h4>

          {/* Other User Information */}
          <p>Email: john.doe@example.com</p>
          <p>Location: City, Country</p>
          {/* Add more information as needed */}

          {/* Edit Profile Button (optional) */}
          <button className="btn btn-primary">Edit Profile</button>
        </div>
        {/* End User Profile Content */}
      </div>
    </div>
  );
}

export default Profile;
