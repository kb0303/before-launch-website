import React from 'react';
import './App.css';

function Loader() {
	return (
		<div className="loader">
			<div className="container" id="mainBox22">
				<div className="row justify-content-center align-items-center m-100vh">
					<div className="col-lg-8 mt-5">
						<div className="notification-box w-100 h-100">
							<div className="d-flex justify-content-between align-items-center border-bottom p-3 device-icons-container">
								<p className="mb-0 fs-3 fw-semibold" style={{ color: "#007fda" }}> Please Wait...</p>
								<div className='device-icons-wrapper'>
									<i className="fa-solid fa-print top-logo-img text-white me-2"
										style={{ background: "#007fda", border: "3px solid #007fda" }}></i>
									<i className="fa-solid fa-laptop top-logo-img me-2"
										style={{ border: "3px solid #007fda", color: "#007fda" }}></i>
									<i className="fa-solid fa-computer top-logo-img me-2"
										style={{ border: "3px solid #007fda", color: "#007fda" }}></i>
									<i className="fa-solid fa-display top-logo-img me-2"
										style={{ border: "3px solid #007fda", color: "#007fda" }}></i>
								</div>
							</div>
							<div className="p-5 loader-info-container">
								<div className="row justify-content-center align-items-center mt-3">
									<div className="col-lg-8">
										<p className="fs-6 fw-semibold">Based on the answers provided by you; We are trying to
											determine
											resolution. Kindly be patient</p>
										<p className="mt-4 middile-text-p fw-semibold">You will be provided with 3 probable causes, and the
											resolution steps. If you are unable to resolve yourself. You will be contacted
											by our Support Team.</p>
									</div>
									<div className="col-lg-4 text-center">
										<img src="https://cdn-icons-png.flaticon.com/128/599/599297.png" alt=""
											width="100%" />
									</div>
								</div>
								<div className="d-flex justify-content-center align-items-center mt-5 mb-4">
									<div className="spinner-border" role="status" style={{ color: "#007fda" }}>
										<span className="visually-hidden"></span>
									</div>
									<p className="mb-0 ms-3 fs-6 fw-semibold">Waiting for action to be completed</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Loader;
