import { Link } from "react-router-dom";
import { FuncionsForm } from "./funcionsForm"

const initialForm = {
    name: "",
    email: "",
    phone: "",
};

const validateForm = (form) => {
    const errors = {};
    if (!form.name.trim()) {
    errors.name = "El nombre es requerido";
    }
    if (!form.email.trim()) {
    errors.email = "El email es requerido";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
    errors.email = "El email no es válido";
    }
    if (!form.phone) {
    errors.phone = "El teléfono es requerido";
    } else if (form.phone.length < 10 || form.phone.length > 17) {
    errors.phone = "El teléfono no es válido";
    }
    return errors;
};
const Form = () => {
    const { form, errors, handleChange, handleBlur, handleSubmit } = FuncionsForm(
    initialForm,
    validateForm
    );

    return (
    <div>
        <div className="form-container">
        <h1 className="card-text">Generar orden de Compra</h1>
        <form className="card-large">
            <div className="mb-6 row">
                <label className="col-sm-2 col-form-label" htmlFor="name"> Nombre y Apellido </label>
                <div className="col-sm-10">
                    <input className="form-control form-control-sm" type="text" name="name" placeholder="Ingrese su nombre aqui" required value={form.name} onBlur={handleBlur} onChange={handleChange}/>
                </div>
            </div>
            {errors.name && <p className="formulario-error">{errors.name}</p>}
            <div className="mb-6 row">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input className="form-control form-control-sm" type="email" name="email" placeholder="ejemplo@ejemplo.com" required value={form.email} onBlur={handleBlur} onChange={handleChange} />
                </div>
            </div>
            {errors.email && <p className="formulario-error">{errors.email}</p>}
            <div className="mb-6 row">
                <label htmlFor="phone" className="col-sm-2 col-form-label">Teléfono</label>
                <div className="col-sm-10">
                    <input className="form-control form-control-sm" type="phone" name="phone" placeholder="ingrese numero de telefono" required value={form.phone} onBlur={handleBlur} onChange={handleChange} />
                </div>
            </div>
            {errors.phone && <p className="formulario-error">{errors.phone}</p>}
            <div className="card-text">
            <button type="submit" className="botonera btn btn-dark" onClick={handleSubmit}><Link className="text-button" to='/'>Generar Orden</Link></button>
            </div>
            </form>
        </div>
    </div>
    );
};
export default Form;