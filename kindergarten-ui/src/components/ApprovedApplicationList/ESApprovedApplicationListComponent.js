import React from "react";
import Proptypes from "prop-types";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { Modal, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import AppModal from "../common/AppModal";

const ESApprovedApplicationListComponent = ({
  applications,
  queues,
  recalculation,
  currentPage,
  totalPages,
  firstPage,
  prevPage,
  lastPage,
  nextPage,
  queueStatus,
  permission,
  noPDF,
  statusRejected,
  closeAlert,
  onStatusChange,
  onOpenPDF,
  updateSearchInputValue
}) => {

  let table = (

    <div>
      <div className="row">
        <div className="col-10">
          <form className="form-inline">
            <div className="form-inline mr-sm-3"><BsSearch size="18px" color="#4285F4" /></div>
            <input className="form-control" type="search" style={{ width: "350px" }} placeholder="Įveskite vaiko asmens kodą arba pavardę..." aria-label="Search" onChange={updateSearchInputValue}></input>
          </form>
        </div>
        {permission && queueStatus === "LOCKED" && <div className="col-2">
          <button type="submit" className="templatemo-blue-button" onClick={recalculation}>
            Perrūšiuoti prašymus
          </button>
        </div>}
      </div>
      <div className="templatemo-content-widget no-padding col-12 my-4 mx-0">
        <div className="panel panel-default table-responsive">
          <table className="table table-striped table-bordered templatemo-user-table">
            <thead>
              <tr>
                <th scope="col">Balas</th>
                <th scope="col">Vaikas</th>
                <th scope="col">Vaiko asmens kodas</th>
                <th scope="col">Vaiko atstovas</th>
                <th scope="col">Data</th>
                <th scope="col">Statusas</th>
                <th scope="col">Darželis</th>
                <th scope="col">Laukimo Nr.</th>
                <th scope="col">Sveikatos pažyma</th>
                {permission && queueStatus === "LOCKED" ? <th scope="col">Redagavimas</th> : null}
              </tr>
            </thead>

            <tbody>
              {applications.map(
                (
                  {
                    id,
                    score,
                    childFirstName,
                    childLastName,
                    parentFirstName,
                    parentLastName,
                    date,
                    status,
                    approvedKindergarten,
                    waitingNumber,
                    applicationId,
                    childPersonalCode

                  },
                  index
                ) => {
                  if (waitingNumber === null) {
                    waitingNumber = "-";
                  }

                  if (approvedKindergarten === null) {
                    approvedKindergarten = "-";
                  }

                  return (
                    <tr key={id}>
                      <td>{score}</td>
                      <td>{childFirstName + " " + childLastName}</td>
                      <td>{childPersonalCode}</td>
                      <td>{parentFirstName + " " + parentLastName}</td>
                      <td>{date}</td>
                      <td>{status}</td>
                      <td>{approvedKindergarten}</td>
                      <td>{waitingNumber}</td>
                      <td>
                        <button className="templatemo-edit-btn" onClick={onOpenPDF} value={applicationId}>
                          Atsisiųsti</button>
                      </td>
                      {permission && queueStatus === "LOCKED" ? (
                        status !== "Atmestas" ?
                          <td>
                            <button
                              className="templatemo-edit-btn-danger"
                              id={applicationId}
                              data-toggle="modal"
                              data-target={`#exampleModal${applicationId}`}>
                              Atšaukti prašymą
                            </button>
                            <AppModal
                              targetId={applicationId}
                              modalTitle="Prašymo atšaukimas"
                              modalMessage="Jei atšauksite prašymą, jo būsena negrįžtamai bus pakeista į atšauktą. Po to perrūšiuokite prašymus."
                              modalApprove={onStatusChange}
                              modalButtonMessage="Atšaukti prašymą"
                              modalButtonStyle="danger"
                            />
                          </td>
                          : <td></td>
                      ) : null}
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Modal show={noPDF} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body>Vaiko atstovas nėra pridėjęs sveikatos pažymos.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeAlert}>
            Uždaryti
        </Button>
        </Modal.Footer>
      </Modal>

      <div className="button-toolbar mt-5 mb-4" role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group mr-2" role="group" aria-label="First group">
          <div className="pr-3" style={{ color: "#AFAFAF", alignItems: "center" }}>
            <p>
              Rodoma {currentPage} iš {totalPages} puslapių{" "}
            </p>
          </div>
        </div>

        <div className="btn-group mr-2" role="group" aria-label="First group">
          <button type="button mr-2" className="templatemo-blue-button " onClick={firstPage}>
            Pirmas
          </button>
        </div>

        <div className="btn-group mr-2" role="group" aria-label="Second group">
          <button type="button mr-2" className="templatemo-blue-button " onClick={prevPage}>
            <BsChevronLeft />
          </button>
        </div>

        <div className="btn-group mr-2" role="group" aria-label="Second group">
          <button type="button mr-2" className="templatemo-blue-button " onClick={nextPage}>
            <BsChevronRight />
          </button>
        </div>

        <div className="btn-group" role="group" aria-label="Second group">
          <button type="button" className="templatemo-blue-button" onClick={lastPage}>
            Paskutinis
          </button>
        </div>
      </div>
    </div>
  );


  return queues.find(queue => queue.status === "ACTIVE") ? <h6 className="text-center">Prašymų registracija nėra sustabdyta</h6> : table;


};

ESApprovedApplicationListComponent.propTypes = {
  applications: Proptypes.array,
};

export default ESApprovedApplicationListComponent;
