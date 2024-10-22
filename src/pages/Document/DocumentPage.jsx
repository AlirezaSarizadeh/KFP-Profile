import React, { useEffect, useState } from 'react'
import './document.css'
import authBg from '../../assets/images/auth-bg.png'
import prevIco from '../../assets/images/prev-ico.png'
import searchIco from '../../assets/images/search-ico.png'
import logOutIco from '../../assets/images/logout-ico.png'
import testPdf from '../../assets/pdf-test.pdf'
import MyPDFViewer from '../../components/pdf/MyPDFViewer'
import GoBackHistory from '../../components/goBackHistory/GoBackHistory'
import SearchBar from '../../components/searchBar/SearchBar'
import { Link } from 'react-router-dom'
import Menu from '../../components/menu/Menu'
import { useParams } from 'react-router-dom'
import { fetchDocCategories, fetchDocChildItems, fetchDocItems, fetchDocSubItems } from '../../api/fetchData'

const Document = ({file , title , desc}) => {

    const [pdfBlob, setPdfBlob] = useState(null);


    useEffect(() => {
        const loadCategories = async () => {
            // const data = await fetchDocItems(doc);
            // setCategories(data);
            setPdfBlob(file)
            console.log(pdfBlob);
        };
        loadCategories();

        console.log('render shod');

    }, []);

    return (
        <>
            <section className=" w-100">
                <div className="row justify-content-center w-100">

                    {/* <!-- side bar --> */}

                    {/* <!-- heading --> */}
                    <div className="h6 text-center text-light mt-lg-4 mt-2">
                        {/* {categories.title} */}
                        {title}
                    </div>
                    <div
                        className="col-lg-12 d-flex flex-column align-items-start justify-content-start p-lg-5  ">
                        <div className="mt-0 m-auto row row-cols-1 w-100">


                            {/* Ensure pdfBlob is valid before passing it to the viewer */}
                            {/* {<MyPDFViewer pdf={file} />} */}
                            {pdfBlob && <MyPDFViewer pdf={pdfBlob} />}





                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Document
