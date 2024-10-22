import React from 'react'
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

const DocumentPageSinglePage = () => {
    return (
        <>
            <section className=" w-100">
                <div className="row justify-content-center w-100">

                    {/* <!-- side bar --> */}

                    {/* <!-- heading --> */}
                    <div
                        className="col-lg-12 d-flex flex-column align-items-start justify-content-start p-lg-5  ">
                        <div className="mt-0 m-auto row row-cols-1 w-100">

                            <MyPDFViewer pdf={"https://profile.kfp-dental.com/account/Silo.pdf"} />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DocumentPageSinglePage
