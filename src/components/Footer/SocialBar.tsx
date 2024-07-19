import { FaceBookIcon, TwitterIcon, InstagramIcon } from "../Icons";

const SocialBar: React.FC = () => {
    return (
      <div className="flex justify-center items-center p-6 border-y border-gray-300">
        <div className="hidden md:block mr-4">
          <span>Get connected with us on social networks: </span>
        </div>
        <div className="flex justify-center">
          <a href="#!" className="mr-6">
            <FaceBookIcon
              width={15}
              height={15}
              color="white"
              className="hover-effect"
            />
          </a>
          <a href="#!" className="mr-6">
            <TwitterIcon
              width={15}
              height={15}
              color="white"
              className="hover-effect"
            />
          </a>
          <a href="#!" className="mr-6">
            <InstagramIcon
              width={15}
              height={15}
              color="white"
              className="hover-effect"
            />
          </a>
        </div>
      </div>
    );
}

export default SocialBar;