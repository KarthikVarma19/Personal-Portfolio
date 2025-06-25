import {
  EmailOutlined,
  LocationOnOutlined,
  PhoneAndroidOutlined,
} from "@mui/icons-material";
import Card from "../Card/Card";
import { IoGlobeOutline } from "react-icons/io5";

const ContactDetails = () => {
  const data = {
    phoneno: "+91 9676502330",
    email: "ganarajukarthikvarma1635@gmail.com",
    linkedin: "https://www.linkedin.com/in/karthikvarmaganaraju/",
    address: "Visakhaptnam, AP, india",
    websiteurl: "www.karthikvarma.in",
  };
  return (
    <>
      <div className="container pt-3">
        <div>
          <div className="row mb-3">
            <div className="col-1 text-center">
              <PhoneAndroidOutlined className="text-primary" />
            </div>
            <div className="col-11">
              <p className="mb-0 fw-bold">Phone</p>
              <p>{data.phoneno}</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-1 text-center">
              <EmailOutlined className="text-primary" />
            </div>
            <div className="col-11">
              <p className="mb-0 fw-bold">Email</p>
              <p>{data.email}</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-1 text-center">
              <LocationOnOutlined className="text-primary" />
            </div>
            <div className="col-11">
              <p className="mb-0 fw-bold">Address</p>
              <p>{data.address}</p>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-1 text-center">
              <IoGlobeOutline className="text-primary" />
            </div>
            <div className="col-11">
              <p className="mb-0 fw-bold">Website</p>
              <p>{data.websiteurl}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <section>
        <div className="row d-flex flex-row align-items-center justify-content-center">
          <div className="col-12 col-md-6 d-none d-sm-block">
            <Card
              title="My Map"
              children={
                <iframe
                  width="100%"
                  height="600"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=17.824984197157697,%2083.36999562087932+(Karthik%20Varma)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              }
            />
          </div>
          <div className="col-12 col-md-6">
            <Card title="My Contact Details" children={<ContactDetails />} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
