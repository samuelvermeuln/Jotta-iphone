import React, { useRef, useState, useEffect } from 'react';
import Pdf from "react-to-pdf";

import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import { Dialog } from 'primereact/dialog';

import { useForm } from "react-hook-form";
import { Modal } from '../modal/Modal';

export function FormNf() {
    const ref = useRef()

    const [Visible, setVisible] = useState(false);
    const [valueForm, setValueForm] = useState('');
    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data => {
        setValueForm(data);
    }

    useEffect(()=>{
        setVisible(false)
    },[])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid p-fluid">
                    <div className="col-12 md:col-4">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <InputText
                                {...register("nome")}
                                name="nome"
                                placeholder="Username"
                            />
                        </div>
                    </div>

                    <div className="col-12 md:col-4">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">$</span>
                            <InputText
                                {...register("price")}
                                name="price"
                                placeholder="price"
                                type="number"
                            />
                        </div>
                    </div>

                    <div className="col-12 md:col-4">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">www</span>
                            <InputText
                                {...register("sobrenome")}
                                name="sobrenome"
                                placeholder="Website"
                            />
                        </div>
                    </div>



                    {/* <Button
                        label="Limpar"
                        icon="pi pi-times"
                        onClick={() => reset({nome: ''})}
                        className="p-button-danger"
                    /> */}

                </div>
                <Button
                        label="Gerar Nota"
                        icon="pi pi-thumbs-up"
                        onClick={() => setVisible(true)}
                        className="p-button-success"
                    />
            </form>
            <Modal valueFormulario={{ data: valueForm, visible: Visible }} />
        </>

    )
}