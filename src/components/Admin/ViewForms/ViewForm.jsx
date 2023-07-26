import React, { useEffect, useState } from "react";
import './viewForm.scss';
import axios from "axios";
import { DotLoader } from "react-spinners";
import { toast } from "react-toastify";
import routes from "../../../config/routes";
import { Link } from "react-router-dom";

const ViewForm = () => {

    const formId = localStorage.getItem('Form-id');
    const token = localStorage.getItem('Token');

    const [formInView, setFormInView] = useState(null);
    const [loader, setLoader] = useState(false);
    const [result, setResult] = useState('');
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    useEffect(() => {
        setLoader(true);
        axios.get(`https://api-form.surveysays.xyz/Survey/${formId}`, config)
            .then((response) => {
                setLoader(false);
                setFormInView(response?.data?.data)
            })
            .catch((err) => {
                setLoader(false);
                console.log({ err })
            })
    }, [])

    const handleDownload = (item) => {
        console.log({ item })
        const splitLink = item?.split('/');
        const url = `survey-app%2F${splitLink[4]}`
        axios.get(`https://api-form.surveysays.xyz/media/${url}`, config)
            .then((response) => {
                console.log({ response })
                const contentDisposition = response?.headers?.get('content-disposition');
                let filename = 'download.docx';

                if (contentDisposition) {
                    const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                    const matches = filenameRegex.exec(contentDisposition);
                    if (matches !== null && matches[1]) {
                        filename = matches[1].replace(/['"]/g, '');
                    }
                }

                const data = response?.data?.blob();
                const fileBlob = new Blob(data);
                const fileUrl = URL.createObjectURL(fileBlob);

                const downloadLink = document.createElement('a');
                downloadLink.href = fileUrl;
                downloadLink.download = filename;
                downloadLink.click();
            })
            .catch((err) => {
                console.log({ err })
            })
    }

    const handleExportCSV = () => {
        const payload = {
            orderNumber: formInView?.orderNumber,
            attendant: formInView?.attendant,
            createdAt: formInView?.createdAt,
            gender: formInView?.gender,
            textFile: formInView?.description,
            imagesList: formInView?.imagesList,
            images: formInView?.images,
        }

        axios.post('https://api-form.surveysays.xyz/Survey/createOrderDetailCsv', payload, config)
            .then((response) => {
                console.log({ response })
                // const data = response?.data?.text();
                const csvBlob = new Blob([response?.data], { type: 'text/csv' });

                const downloadLink = document.createElement('a');
                downloadLink.href = URL.createObjectURL(csvBlob);
                downloadLink.download = 'form.csv';
                downloadLink.click();

            })
            .catch((err) => [
                console.log({ err })
            ])
    }

    const handleStatus = () => {

        if (result === '' && formInView?.status !== 'approvalSent') {
            toast.error('Please write any remarks.')
        }
        else {
            if (formInView?.status === 'pending') {
                setLoader(true);
                const payload = {
                    status: 'approvalSent',
                    result: result
                }
                axios.put(`https://api-form.surveysays.xyz/Survey/updateStatus/${formInView?._id}`, payload, config)
                    .then((response) => {
                        toast.success('Status changed.')
                        axios.get(`https://api-form.surveysays.xyz/Survey/${formId}`, config)
                            .then((response) => {
                                setLoader(false);
                                setFormInView(response?.data?.data)
                            })
                            .catch((err) => {
                                setLoader(false);
                                console.log({ err })
                            })
                    })
                    .catch((err) => {
                        setLoader(false)
                    })
            }
            if (formInView?.status === 'approvalSent') {
                toast.info('Waiting for user approval.')
            }
            if (formInView?.status === 'approved') {
                setLoader(true);
                const payload = {
                    status: 'completed',
                    result: result
                }
                axios.put(`https://api-form.surveysays.xyz/Survey/updateStatus/${formInView?._id}`, payload, config)
                    .then((response) => {
                        toast.success('Status changed.')
                        axios.get(`https://api-form.surveysays.xyz/Survey/${formId}`, config)
                            .then((response) => {
                                setLoader(false);
                                setFormInView(response?.data?.data)
                            })
                            .catch((err) => {
                                setLoader(false);
                                console.log({ err })
                            })
                    })
                    .catch((err) => {
                        setLoader(false)
                    })
            }
        }

    }

    return (
        <>
            {
                loader ?
                    <div className="loaderWrapper">
                        <DotLoader className="login-clip-loader" color={"#1686FC"} />
                        <h1
                            style={{
                                color: "#1686FC",
                                fontSize: "2.4rem",
                            }}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;Please wait...
                        </h1>
                    </div>
                    :
                    <section id="view-form">
                        <Link className="go-back-button" to={routes.admin.dashboard}>Go Back</Link>
                        <p className="mt-4">Form <b>{formInView?.orderNumber}</b> in view.</p>
                        <br />
                        <div className="row mt-4">
                            <div className="col-md-9">
                            <div className="row mb-2">
                                    <h5>Paid: <b>{(formInView?.paid === true ? 'Yes' : 'No')}</b></h5>
                                </div>
                                <div className="row mb-2">
                                    <h5>Respondents: <b>{(formInView?.amount / 2.5)}</b></h5>
                                </div>
                                <div className="row mb-2">
                                    <h5>Gender: <b>{formInView?.gender}</b></h5>
                                </div>
                                <div className="row mb-2">
                                    <h5>Type: <b>{formInView?.type}</b></h5>
                                </div>
                                {
                                    formInView?.type === 'textOnly' &&
                                    <div className="row mb-2">
                                        {
                                            formInView?.description?.includes('media.s3') ?
                                                <h5>Description:
                                                    <a onClick={() => handleDownload(formInView?.description)} style={{ color: '#1686FC', cursor: 'pointer' }}>&nbsp;&nbsp;Download</a>
                                                </h5>
                                                :
                                                !formInView?.description?.includes('media.s3') && formInView?.description?.includes('docs', 'google') ?
                                                    <h5>Description:
                                                        <a href={formInView?.description} target="_blank" style={{ fontSize: '1.7rem' }}>&nbsp;&nbsp;Open Google Docs link</a>
                                                    </h5>
                                                    :
                                                    <h5>Description: <b>{formInView?.description}</b></h5>
                                        }
                                    </div>
                                }
                                {
                                    formInView?.type === 'imageOnly' &&
                                    <div className="row mb-2">
                                        <h5>Images</h5>
                                        {
                                            formInView?.imagesList?.length !== 0 &&
                                            formInView?.imagesList.map((item, index) => {
                                                console.log({ item })
                                                return (
                                                    <>
                                                        All Images
                                                        <a onClick={() => handleDownload(item)} style={{ color: '#1686FC', cursor: 'pointer' }}>&nbsp;&nbsp;Download {index + 1}</a>
                                                    </>
                                                )
                                            })
                                        }
                                        {
                                            formInView?.images?.length !== 0 &&
                                            formInView?.images?.map((item, index) => {
                                                return (
                                                    <>
                                                        <div className="row">
                                                            Question {index + 1}
                                                            {
                                                                item?.images?.map((img, ind) => {
                                                                    return (
                                                                        <a onClick={() => handleDownload(img)} style={{ color: '#1686FC', cursor: 'pointer' }}>&nbsp;&nbsp;Download {ind + 1}</a>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                }
                                {
                                    formInView?.type === 'both' &&
                                    <>
                                        <div className="row mb-2">
                                            <h5>Images</h5>
                                            <div className="row">
                                                {
                                                    formInView?.imagesList?.length !== 0 &&
                                                    formInView?.imagesList.map((item, index) => {
                                                        console.log({ item })
                                                        return (
                                                            <>
                                                                All Images
                                                                <a onClick={() => handleDownload(item)} style={{ color: '#1686FC', cursor: 'pointer' }}>&nbsp;&nbsp;Download {index + 1}</a>
                                                            </>
                                                        )
                                                    })
                                                }
                                                {
                                                    formInView?.images?.length !== 0 &&
                                                    formInView?.images?.map((item, index) => {
                                                        return (
                                                            <>
                                                                <div className="row">
                                                                    Question {index + 1}
                                                                    {
                                                                        item?.images?.map((img, ind) => {
                                                                            return (
                                                                                <a onClick={() => handleDownload(img)} style={{ color: '#1686FC', cursor: 'pointer' }}>&nbsp;&nbsp;Download {ind + 1}</a>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            {
                                                formInView?.description?.includes('media.s3') ?
                                                    <h5>Description:
                                                        <a onClick={() => handleDownload(formInView?.description)} style={{ color: '#1686FC' }}>&nbsp;&nbsp;Download</a>
                                                    </h5>
                                                    :
                                                    !formInView?.description?.includes('media.s3') && formInView?.description?.includes('docs', 'google') ?
                                                        <h5>Description:
                                                            <a href={formInView?.description} target="_blank" style={{ fontSize: '1.7rem' }}>&nbsp;&nbsp;Open Google Docs link</a>
                                                        </h5>
                                                        :
                                                        <h5>Description: <b>{formInView?.description}</b></h5>
                                            }
                                        </div>
                                    </>
                                }
                            </div>
                            <div className="col-md-3">
                                <div className="row ">
                                    <button className="csv-button" onClick={handleExportCSV}>Download Form</button>
                                </div>
                                <div className="row mt-4">
                                    <h5>Status: <b>{formInView?.status}</b></h5>
                                </div>
                                {
                                    formInView?.paid === true &&
                                    <>
                                        <div className="row mt-4">
                                            <button className="status-button" onClick={handleStatus}>{formInView?.status === 'pending' ? 'Change status to Approval Sent' : formInView?.status === 'approvalSent' ? 'Waiting for Approval' : 'Change status to Completed'}</button>
                                        </div>
                                        <div className="row mt-4">
                                            <textarea className="result-field" value={result} placeholder="Write any remarks" onChange={(e) => setResult(e.target.value)} />
                                        </div>
                                    </>
                                }

                            </div>
                        </div>
                    </section>
            }
        </>
    )
}

export default ViewForm;
