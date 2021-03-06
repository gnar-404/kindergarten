import React from "react";
import Proptypes from "prop-types";
import Input from "../common/Input";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AppModal from "../common/AppModal";

const EsQueueListComponent = ({
    queues,
    handleChange,
    queue,
    errors,
    toggleUpdate,
    isUpdating,
    handleClosingRegistration,
    message,
    messageStyle,
    handleApprove
}) => {
    const { registrationClosingDt } = queue;
    return (
        <div>
            <div className="templatemo-content-widget no-padding col-12 my-4 mx-0">
                <div className="panel panel-default table-responsive">
                    <table className="table table-striped table-bordered templatemo-user-table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Eilės atidarymas</th>
                                <th scope="col">Registracijos stabdymas</th>
                                <th scope="col">Eilės uždarymas</th>
                                <th scope="col">Būsena</th>
                                {queues.length > 0
                                    && queues.filter(q => q.status === "ACTIVE").length > 0
                                    ? <th scope="col">Registracijos stabdymo veiksmai</th>
                                    : <th scope="col"></th>}
                            </tr>
                        </thead>

                        {queues.length > 0 &&
                            <tbody>
                                {queues.map(({ openingDate, closingDate, registrationClosingDate, status, id }, index) => (
                                    <tr key={id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>
                                            {openingDate ? new Intl.DateTimeFormat('lt-LT', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(openingDate)) : "-"}
                                        </td>
                                        {!isUpdating
                                            && <td>
                                                {registrationClosingDate ? new Intl.DateTimeFormat('lt-LT', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(registrationClosingDate)) : "-"}
                                            </td>}
                                        {(isUpdating && status === "ACTIVE")
                                            && <td>
                                                <Input
                                                    formGroupStyle="mb-0"
                                                    type="datetime-local"
                                                    onChange={handleChange}
                                                    inputStyle="col-11 mx-auto "
                                                    error={errors.registrationClosingDt}
                                                    name="registrationClosingDt"
                                                    value={registrationClosingDt}
                                                    errorMessage="Šis laukas privalomas"
                                                    min={new Intl.DateTimeFormat('lt-LT', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(openingDate)).split(" ")[0]
                                                        + "T"
                                                        + new Intl.DateTimeFormat('lt-LT', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(openingDate)).split(" ")[1]}
                                                />
                                            </td>}
                                        {(isUpdating && status !== "ACTIVE")
                                            && <td>
                                                {registrationClosingDate ? new Intl.DateTimeFormat('lt-LT', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(registrationClosingDate)) : "-"}
                                            </td>}
                                        {closingDate
                                            ? <td>
                                                {closingDate && new Intl.DateTimeFormat('lt-LT', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(closingDate))}
                                            </td>
                                            : status === "LOCKED"
                                                ? <td>
                                                    <button
                                                        className="templatemo-edit-btn-danger"
                                                        id={id}
                                                        data-toggle="modal"
                                                        data-target={`#exampleModal${id}`}>
                                                        Uždaryti
                                                        </button>
                                                    <AppModal
                                                        targetId={id}
                                                        modalTitle="Eilės uždarymas"
                                                        modalMessage="Jei uždarysite eilę, ji bus perskaičiuota ir bus išsiųstos galutinės prašymų į darželius būsenos vaikų atstovams."
                                                        modalApprove={handleApprove}
                                                        modalButtonMessage="Uždaryti eilę"
                                                        modalButtonStyle="danger"
                                                    />
                                                </td>
                                                : <td>-</td>}
                                        <td>{(status === "ACTIVE")
                                            ? "Aktyvi"
                                            : (status === "LOCKED")
                                                ? "Sustabdyta"
                                                : "Neaktyvi"}
                                        </td>
                                        {status === "ACTIVE"
                                            && !isUpdating
                                            && <td id={id}>
                                                <button className="templatemo-edit-btn" id={id} onClick={toggleUpdate}>Keisti</button>
                                            </td>}
                                        {status === "ACTIVE"
                                            && isUpdating
                                            && <td id={id}>
                                                <button className="templatemo-edit-btn mr-1" id={id} onClick={toggleUpdate}>Atšaukti</button>
                                                <button className="templatemo-edit-btn" id={id} onClick={handleClosingRegistration}>Saugoti</button>
                                            </td>}
                                        {status !== "ACTIVE" && <td></td>}
                                    </tr>
                                ))}
                            </tbody>}
                    </table>
                </div>
            </div >
            <div className="row col-12 px-0 mx-auto">
                <span className={`${messageStyle} col-12`}>{message}</span>
            </div>
        </div>
    );
};

EsQueueListComponent.propTypes = {
    queues: Proptypes.array.isRequired,
    handleChange: Proptypes.func.isRequired,
    queue: Proptypes.object.isRequired,
    errors: Proptypes.object.isRequired
};

export default EsQueueListComponent;
