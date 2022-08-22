import { useState, useContext } from "react";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import Swal from "sweetalert2";
import { CartContext } from "../../context/cartContext";


export const FuncionsForm = (initialForm, validateForm) => {
    const { cart, deleteAll,} = useContext(CartContext);
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});

    
    const modalBasico = (id) => {
    Swal.fire({
        title: `Sr/Sra: ${form.name}`,
        text: `Su Orden se nombro bajo el id: (${id}) `,
        icon: "success",
        confirmButtonText: "OK",
    });
    
    };
    
    const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
        ...form,
        [name]: value,
    });
    };

    const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
        handleClick();
        
    } else {
        console.log("error");
    }
    };

    
    function handleClick() {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    const order = {
        buyer: {
            name: form.name,
            email: form.email,
            phone: form.phone,
        },
        items: cart.map((item) => ({
            title: item.name,
            price: item.price,
        })),
        total: cart.reduce(
            (acc, item) => acc + item.price * item.carrito,
            0,
            ),
        };
    addDoc(ordersCollection, order).then((response) => {
        modalBasico(response.id);
        deleteAll();
    });
};

    return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    };
};