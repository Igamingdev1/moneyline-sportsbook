const CookiePage: React.FC = () => {
  return (
    <div className="container mx-auto p-2">
      <p className="text-4xl font-bold my-4">Cookie Policy</p>
      <p className="text-2xl font-bold">
        Cookie Policy of Money Line Sports Inc. (the "Company")
      </p>
      <p className="text-xl italic">
        Version: 1.1 - Last update 19th of December 2022
      </p>
      <div className="mt-4 mb-16">
        <ul className="ml-12">
          <li>
            General
            <ul className="list-circle ml-12">
              <li>
                The Money Line Sports Inc. website (the "Website") uses cookies
                to deliver a better and more personalized service to users.
              </li>
              <li>
                This Cookies Policy explains what cookies are, how they are used
                on the Website and how to manage their use.
              </li>
            </ul>
          </li>
          <li>
            What is a Cookie?
            <ul className="list-circle ml-12">
              <li>
                Cokies are small text files containing small amounts of
                information which are sent to and stored on your computer,
                smartphone or other device when you access a website. Cookies
                are then sent back to the originating website on each subsequent
                visit or to another website that recognises that cookie. Cookies
                are useful because they allow a website to recognise a user's
                device.
              </li>
              <li>
                <p>You can find more information about cookies at</p>
                <a
                  className="text-blue-500"
                  href="https://www.cloudflare.com/en-gb/learning/privacy/what-are-cookies/"
                >
                  https://www.cloudflare.com/en-gb/learning/privacy/what-are-cookies/{" "}
                </a>
              </li>
            </ul>
          </li>
          <li>
            Use of Cookies on the Website
            <ul className="list-circle ml-12">
              <li>
                Cookies are used on the Website for a number of reasons. This
                includes, but is not limited to, the following:
                <ul className="list-disc ml-12">
                  <li>
                    To allow users to log on to their Money Line Sports Inc.
                    account;
                  </li>
                  <li>To allow users to choose log-in preferences;</li>
                  <li>
                    o monitor and collect information about transactions placed
                    on the Website;
                  </li>
                  <li>
                    For fraud prevention purposes and generally to safeguard
                    privacy.
                  </li>
                </ul>
              </li>
              <li>
                Cookies are generally used to improve and enhance the user
                experience. Some of the cookies we use are essential for the
                Website to operate.
              </li>
              <li>
                Money Line Sports Inc.’s use of cookies on the website falls
                into the following categories:
                <ul className="list-disc ml-12">
                  <li>
                    Session Management- these cookies are essential to enable
                    use of the Website, they manage session information and
                    enable users to navigate through the Website.
                  </li>
                  <li>
                    Functionality- these cookies store information which enables
                    us to remember user preferences e.g. preferred language,
                    sort types, media settings. They are also used to improve
                    users' experience by, for example, stopping users from being
                    shown the same message twice.
                  </li>
                  <li>
                    Fraud Prevention- these cookies store information which
                    helps us stop fraudulent use of the Website.
                  </li>
                  <li>
                    Tracking- these cookies enable us to store information about
                    how users landed on the Website. We need to record this so
                    that we can appropriately pay our Affiliates.
                  </li>
                  <li>
                    Analysis- these cookies allow us to recognise and count the
                    number of users and to see how users move around our Website
                    when they are using it. This helps us to improve the way the
                    Website works, for example, by ensuring that users are
                    finding what they are looking for easily and to deliver
                    adverts and information which are more relevant to each user
                    and their interests and to monitor the effectiveness of such
                    adverts and information.
                  </li>
                </ul>
              </li>
              <li>
                Money Line Sports Inc. might, from time to time, use carefully
                selected third party tracking and/or analytical cookies to
                assist in improving the Website and Money Line Sports Inc.’s
                services for users.
              </li>
              <li>
                Where links are provided on the website to third party websites,
                it is important to remember that those websites will have their
                own cookies and privacy policies which will govern any
                information you may submit. If you decide to use any linked
                third party websites please read their cookies and privacy
                policies before doing so.
              </li>
            </ul>
          </li>
          <li>
            Managing Cookies
            <ul className="list-circle ml-12">
              <li>
                <p>
                  If you want to delete any cookies already stored on your
                  computer or stop the cookies that keep track of your browsing
                  patterns on the Website, you can do so by deleting your
                  existing cookies and/or altering your browser's privacy
                  settings (the process you follow will differ from browser to
                  browser).{" "}
                </p>
                <p>
                  If you would like more information on how to disable cookies
                  or change your privacy settings, please visit
                  computer.howstuffworks.com. Your browser's 'help' function
                  should also tell you how to do this.
                </p>
              </li>
              <li>
                Please note that deleting our cookies or disabling our future
                cookies means that you may not be able to access certain areas
                or features of the website. Details of how Money Line Sports
                Inc. protects your privacy are set out in our Privacy Policy.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CookiePage;
