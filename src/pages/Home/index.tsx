import { useState, ChangeEvent } from "react";
import { Employee } from "../../App";
import closeImgModal from "../../assets/img/close.png";
import { Modal } from "hrnetmodaltt";

const Forms: React.FC<{ addEmployee: (employee: Employee) => void }> = ({
  addEmployee,
}) => {
   /**
   * EN : Local state to manage the opening of the modal
   * FR : État local pour gérer l'ouverture de la modal
   * @type {boolean}
   */

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [birthdate, setBirthdate] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [department, setDepartment] = useState<string>("");

   /**
   * Function to close the modal
   */

  const closeModal = () => {
    setIsModalOpen(false);
  };

   /**
   * Function to submit the form and add an employee
   */

  const Submit = () => {
    setIsModalOpen(true);
    const newEmployee: Employee = {
      FirstName: firstName,
      LastName: lastName,
      DateOfBirth: new Date(birthdate),
      startline: new Date(startDate),
      departement: department,
      Street: street,
      City: city,
      State: state,
      PostalCode: postalCode,
    };

    addEmployee(newEmployee);

    console.log(newEmployee);
  };

  const handleFirstNameChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLastName(event.target.value);
  };

  const handleBirthdateChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setBirthdate(event.target.value);
  };

  const handleStartDateChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setStartDate(event.target.value);
  };

  const handleStreetChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setStreet(event.target.value);
  };

  const handleCityChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setCity(event.target.value);
  };

  const handleStateChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setState(event.target.value);
  };

  const handlePostalCodeChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setPostalCode(event.target.value);
  };

  const handleDepartmentChange = (
    event: ChangeEvent<HTMLSelectElement>
  ): void => {
    setDepartment(event.target.value);
  };

  return (
    <div className={`forms ${isModalOpen ? "modal-opened" : ""}`}>
      <div className="forms__title">Créer un employé</div>
      <div className="forms__top">
        <div className="forms__item">
          <div className="forms__desc">Prénom</div>
          <input
            type="text"
            className="forms__input"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="forms__item">
          <div className="forms__desc">Nom</div>
          <input
            type="text"
            className="forms__input"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div className="forms__item">
          <div className="forms__desc">Date de naissance</div>
          <input
            type="date"
            className="forms__input"
            value={birthdate}
            onChange={handleBirthdateChange}
          />
        </div>
        <div className="forms__item">
          <div className="forms__desc">Date de début</div>
          <input
            type="date"
            className="forms__input"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>
      </div>
      <div className="forms__top">
        <div className="forms__item">
          <div className="forms__desc">Rue</div>
          <input
            type="text"
            className="forms__input"
            value={street}
            onChange={handleStreetChange}
          />
        </div>
        <div className="forms__item">
          <div className="forms__desc">Ville</div>
          <input
            type="text"
            className="forms__input"
            value={city}
            onChange={handleCityChange}
          />
        </div>
        <div className="forms__item">
          <div className="forms__desc">État</div>
          <select
            className="forms__select"
            value={state}
            onChange={handleStateChange}
          >
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AS">American Samoa</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>

          </select>

        </div>
        <div className="forms__item">
          <div className="forms__desc">Code postal</div>
          <input
            type="number"
            className="forms__input"
            value={postalCode}
            onChange={handlePostalCodeChange}
          />
        </div>
      </div>
      <div className="forms__top">
        <div className="forms__item">
          <div className="forms__desc">Département</div>
          <select
            className="forms__select"
            value={department}
            onChange={handleDepartmentChange}
          >
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
            <option value="engineering">Engineering</option>
            <option value="humanressources">Human Ressources</option>
            <option value="legal">Legal</option>

          </select>
        </div>
      </div>
      <div className="forms__top">
        <button className="forms__button" onClick={Submit}>
          Sauvegarder
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title={"Employé créé !"} desc={"L'employé a été rajouté dans la liste des employés"} close={closeImgModal} children={undefined}></Modal>

    </div>
  );
};

export default Forms;
