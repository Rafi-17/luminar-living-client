import useAgreement from "../../../../hooks/useAgreement";

const Profile = () => {
    const [agreements]= useAgreement();
    console.log(agreements);
    return (
        <div>
            My profile            
        </div>
    );
};

export default Profile;