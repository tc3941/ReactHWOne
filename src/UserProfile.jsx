import PropTypes from 'prop-types';

function UserProfile({ name, email, imgUrl }) {
  return (
    <div className="row gy-3">
      <div className="col-md-8 todo m-auto">
        <div className="row pt-3 text-box">
          <p className="text">
            {name} <br></br> {email} <br></br>
          </p>
          <img alt={'image of ' + name} src={imgUrl} />
        </div>
      </div>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default UserProfile;
