import React from "react";
import Proptypes from "prop-types";
import DistrictTableComponent from "../AdminDistrictTable/DistrictTableComponent";

const AdminDistrictFormComponent = ({
  districts,
  addDistrict,
  titleValidation,
  districtName,
  onCreatingDistrictNameChange,
  ...props
}) => {
  return (
    <div>
      <div className="templatemo-content-widget white-bg my-4 col-6 mx-auto">
        <h3 className="margin-bottom-10">Pridėti rajoną</h3>
        <form className="form-inline" onSubmit={addDistrict}>
          <div className={`input-group col-12 px-0 ${titleValidation}`}>
            <input
              type="text"
              className="form-control"
              id="inputDistrict"
              placeholder="Pavadinimas"
              name="districtName"
              value={districtName}
              onChange={onCreatingDistrictNameChange}
            />
            <div className="input-group-append">
              <button type="submit" className="templatemo-blue-button">
                Išsaugoti
            </button>
            </div>
          </div>
          <div className="invalid-feedback">Pavadinimo ilgis turi būti 5-20 ženklų.</div>
        </form>
      </div>
      <div className={props.messageStyle + " col-12 mb-0 mt-2"}>
        {props.requestMessage}
      </div>
      {districts.length > 0 && <DistrictTableComponent districts={districts} {...props} />}
    </div>
  );
};

AdminDistrictFormComponent.propTypes = {
  addDistrict: Proptypes.func.isRequired,
  titleValidation: Proptypes.string.isRequired,
  districtName: Proptypes.string,
  onCreatingDistrictNameChange: Proptypes.func.isRequired,
  messageStyle: Proptypes.string.isRequired,
  requestMessage: Proptypes.string.isRequired,
  districts: Proptypes.array.isRequired
};

export default AdminDistrictFormComponent;
