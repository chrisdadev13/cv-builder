import personalTypes from "./personalTypes";
import experienceTypes from "./experienceTypes";
import educationTypes from "./educationTypes";

export default interface FullData {
  personal: personalTypes;
  experience: experienceTypes;
  education: educationTypes;
}
