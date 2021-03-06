import React from 'react';
import Proptypes from 'prop-types';

let ChildInfoComponent = (props) => {

  if (props.currentStep !== 1) {
    return null
  }

  return (
    <div>
      <div className="templatemo-content-widget white-bg">
        <h3 className="margin-bottom-10">Vaikas</h3>
        <div className="form-group">
          <input
            className={"form-control " + props.childNameValidation} name="childName" value={props.name} onChange={props.onDetailsChange} placeholder="Vardas"></input>
          <div className="invalid-feedback">Šis laukas privalomas. Vardas turi būti 3-20 raidžių ilgio.</div>
        </div>
        <div className="form-group">
          <input
            className={"form-control " + props.childSurnameValidation} name="childSurname" value={props.surname} onChange={props.onDetailsChange} placeholder="Pavardė"></input>
          <div className="invalid-feedback">Šis laukas privalomas. Pavardė turi būti 3-30 raidžių ilgio.</div>
        </div>
        <div className="form-group">
          <input
            className={"form-control " + props.childIdValidation} name="childId" value={props.id} onChange={props.onDetailsChange} placeholder="Asmens kodas"></input>
          <div className="invalid-feedback">Šis laukas privalomas. Asmens kodas turi būti 11 skaitmenų ilgio.</div>
        </div>
        <div className="form-group">
          <input
            className={"form-control " + props.childStreetValidation} name="childStreet" value={props.street} onChange={props.onDetailsChange} placeholder="Adresas"></input>
          <div className="invalid-feedback">Šis laukas privalomas. Adresas turi būti 8-50 simbolių ilgio.</div>
        </div>
        <div className="form-group">
          <input
            className={"form-control " + props.childCityValidation} name="childCity" value={props.city} onChange={props.onDetailsChange} placeholder="Miestas"></input>
          <div className="invalid-feedback">Šis laukas privalomas. Miesto pavadinimas turi būti 4-19 simbolių ilgio. </div>
        </div>
        <div className="col-12 text-right p-0">
          <button className="templatemo-blue-button" onClick={props.saveChild}>Išsaugoti</button>
        </div>
      </div>
      <div className={props.messageStyle + " mt-2"}>
        <span>{props.message}</span>
      </div>

      <div className={props.emptyChildInputsMessageStyle + " mt-2"}>
        <span>{props.emptyChildInputsMessage}</span>
      </div>

      <div className={props.childRegistratedMessageStyle + " mt-2"}>
        <span>{props.childRegistratedMessage}</span>
      </div>
    </div>
  )


}

ChildInfoComponent.propTypes = {

  currentStep: Proptypes.number.isRequired,
  name: Proptypes.string.isRequired,
  surname: Proptypes.string.isRequired,
  birthDate: Proptypes.string.isRequired,
  id: Proptypes.string.isRequired,
  street: Proptypes.string.isRequired,
  city: Proptypes.string.isRequired,
  message: Proptypes.string.isRequired,
  messageStyle: Proptypes.string.isRequired,
  onDetailsChange: Proptypes.func.isRequired,
  saveChild: Proptypes.func.isRequired,
  prev: Proptypes.func.isRequired,
  next: Proptypes.func.isRequired,
  previousButton: Proptypes.func.isRequired
}

export default ChildInfoComponent