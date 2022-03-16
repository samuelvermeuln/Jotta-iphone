import React, { useState, useRef, useEffect } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import Pdf from "react-to-pdf";
import Image from 'next/image';

// valueFormulario={{ data: valueForm, visible: Visible }} 

export function Modal({ valueFormulario }) {

    const [position, setPosition] = useState('center');
    const [displayBasic, setDisplayBasic] = useState(false);
    const ref = useRef()

    const numerovendas = Math.floor(Math.random() * 9999);

    function GeradorPdf() {
        return (
            <>
                <Pdf targetRef={ref} filename={`Nota-J-Iphone ${numerovendas}.pdf`}>
                    {({ toPdf }) =>
                        <Button label="Baixa Nota" icon="pi pi-check" onClick={toPdf} autoFocus />
                    }
                </Pdf>
            </>
        )
    }

    useEffect(() => {
        setDisplayBasic(valueFormulario.visible)
    }, [valueFormulario])

    // <p>{'valueFormulario.data.nome'}</p>


    return (
        <>

            <Dialog
                visible={true}
                // visible={displayBasic} 

                style={{ width: '50vw' }}
                footer={GeradorPdf}
                position={position}
                onHide={() => setDisplayBasic(false)}
            >

                <div ref={ref} >
                    <br />
                    <br />
                    <br />

                    <div >

                        <div className="borda">
                            <Image src="/logo.png" alt="JOTTA Iphone" width={100} height={0} />
                            <div className='caixa1'>
                                <b>JOTTA Iphone</b>
                                <br />
                                {/* <br /> */}
                                <div style={{ marginLeft: '-120px' }}>
                                    <span>Rua Alfredo Blackman, 47, Caratoíra, Vitória - ES</span>
                                    <br />
                                    <span>(27) 99624-4741</span>
                                    <br />
                                    <span>@jotta_iphone</span>
                                </div>
                            </div>

                            <div className="borda-left">
                                <b>Venda</b>
                                <br />
                                <span>Data: 03/02/2022</span>
                                <br />
                                <span>Cnpj: 45.388.458/0001-06</span>
                                <br />
                                <span>Nº Transação: {numerovendas}</span>
                                <br />
                                <br />
                                <span>Garantia: 30 dias</span>
                            </div>
                        </div>

                        <br />
                        <br />

                        <div className="borda caixaTitle">
                            <b>DADOS DO CLIENTE</b>
                        </div>

                        <div className="borda caixacorpo">
                            {/* &nbsp; */}
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span><b>Nome / Razão Social:</b> Leandro Silva Martins</span>
                                <br />
                                <span><b>Endereço:</b> Rua Passos Fundo</span>
                                <br />
                                <span><b>CEP:</b> 29166-067</span>
                                <br />
                                <span><b>RG /Insc.Estadual:</b> </span>
                                <br />
                                <span><b>CPF / CNPJ:</b>....</span>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '160px' }}>
                                <span><b>Cidade:</b> Serra</span>
                                <br />
                                <span><b>Telefone: </b>...</span>
                                <br />
                                <span><b>E-mail: </b> ....</span>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '100px' }}>
                                <span><b>Bairro:</b> Bacelona</span>
                                <br />
                                <span><b>Estado:</b> ES</span>
                                <br />
                                <span><b>Celular:</b> 27 99896-9414</span>
                            </div>

                        </div>

                        <br />
                        <br />

                        <div className="bordarCaixaGrid" >
                            <div className="grid" style={{ marginLeft: '0px' }}>

                                <div style={{ width: "150px" }}>
                                    <div className="col bordar1 "><b>QUANTIDADE</b></div>
                                    <div className="col bordar1-2">1</div>
                                </div>

                                <div style={{ width: '300px' }}>
                                    <div className="col bordar1-1"><b>DESCRIÇÃO</b></div>
                                    <div className="col bordar1-3">IPHONE X 64GB PRETO VITRINE </div>
                                </div>

                                <div style={{ width: '200px' }}>
                                    <div className="col bordar1-1"><b>PREÇO UNITÁRIO </b></div>
                                    <div className="col bordar1-3">R$2.550,00 </div>
                                    <div className="col bordar1-4">Total Produtos: </div>
                                    <div className="col bordar1-4">Desconto: </div>
                                    <div className="col bordar1-4">Subtotal:</div>
                                    <div className="col bordar1-4"><b>Total a Pagar: </b></div>
                                </div>
                                <div style={{ width: '140px' }}>
                                    <div className="col bordar1-1"><b>VALOR</b></div>
                                    <div className="col bordar1-3">R$2.550,00</div>
                                    <div className="col bordar1-3">R$2.550,00</div>
                                    <div className="col bordar1-3">*************</div>
                                    <div className="col bordar1-3">R$2.550,00</div>
                                    <div className="col bordar1-3">R$2.550,00</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            Observações: Cartão Crédito 5x de R$552,61
                            IMEI: 35 305209 681091 0
                        </div>

                    </div>
                </div>

            </Dialog>

        </>
    )
}