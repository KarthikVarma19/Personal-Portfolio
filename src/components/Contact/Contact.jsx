import {
  EmailOutlined,
  LocationOnOutlined,
  PhoneAndroidOutlined,
} from "@mui/icons-material";
import Card from "../Card/Card";
import { IoGlobeOutline } from "react-icons/io5";
import { getContactData } from "../../utils/portfolio.data";
import styles from "./Contact.module.css";
import Footer from "../Footer/Footer";

const data = getContactData();

const ContactDetails = () => {
  return (
    <div className="container pt-3">
      <div>
        <div className="row mb-3">
          <div className="col-1 text-center">
            <PhoneAndroidOutlined className="text-primary" />
          </div>
          <div className="col-11">
            <p className="mb-0 fw-bold">Phone</p>
            <p className="contact-info-blue">{data.phoneno}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-1 text-center">
            <EmailOutlined className="text-primary" />
          </div>
          <div className="col-11">
            <p className="mb-0 fw-bold">Email</p>
            <p className="contact-info-blue">{data.email}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-1 text-center">
            <LocationOnOutlined className="text-primary" />
          </div>
          <div className="col-11">
            <p className="mb-0 fw-bold">Address</p>
            <p className="contact-info-blue">{data.address}</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-1 text-center">
            <IoGlobeOutline className="text-primary" />
          </div>
          <div className="col-11">
            <p className="mb-0 fw-bold">Website</p>
            <a href={data.websiteurl} target="_blank" rel="noopener noreferrer">
              <p className="contact-info-blue">{data.websiteurl}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <>
      <div className={`${styles.contactContainer} m-2 page-enter overflow-y-auto-scrollbar`}>
        <div className={`col-12 col-md-6 d-none d-sm-block ${styles.cardOuterContainer}`}>
          <Card
            title="My Map"
            children={
              <iframe
                title="My Map"
                width="100%"
                height="550"
                src={data.mapUrl}
                className={styles.map}
              ></iframe>
            }
          />
        </div>
        <div className={`col-12 col-md-6 ${styles.cardOuterContainer}`}>
          <Card title="My Contact Details" children={<ContactDetails />} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
