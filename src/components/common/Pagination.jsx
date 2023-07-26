import React, { useEffect, useState } from 'react';
import './pagination.scss';
import axios from 'axios';
import { formDataList } from '../../redux/slice/AdminSlice';
import { useDispatch, useSelector } from 'react-redux';

const Pagination = ({ itemsPerPage }) => {
    const dispatch = useDispatch();

    const token = localStorage.getItem('Token');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const formList = useSelector((state) => state?.AdminSlice?.formData);

    const handlePreviousPage = () => {
        console.log('12')
        if (formList?.pagination?.currentPage > 1) {
            dispatch(formDataList({ pageSize: itemsPerPage, pageNumber: formList?.pagination?.currentPage - 1, config }))
        }
    };

    const handleNextPage = () => {
        if (formList?.pagination?.currentPage < formList?.pagination?.lastPage) {
            dispatch(formDataList({ pageSize: itemsPerPage, pageNumber: formList?.pagination?.currentPage + 1, config }))
        }
    };


    return (
        <div className="pagination">
            <button
                onClick={handlePreviousPage}
                disabled={formList?.pagination?.currentPage === 1}
                className="pagination-btn"
            >
                Previous
            </button>
            <span className="current-page">{formList?.pagination?.currentPage}</span>
            <button
                onClick={handleNextPage}
                disabled={formList?.pagination?.currentPage === formList?.pagination?.lastPage}
                className="pagination-btn"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
