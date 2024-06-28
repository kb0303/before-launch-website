import React from 'react'

function Footer() {
	return (
		<>
			<div className="container mt-4">
				<footer className="pt-5">
					<div className="row">
						<div className="col-12 col-md-2 mb-3">
							<h5>Quick Links</h5>
							<ul className="nav flex-column">
								<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Home</a></li>
								<li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Categories</a></li>
								<li className="nav-item mb-2"><a href="tel:+18888506515" className="nav-link p-0 text-body-secondary">Contact Us</a></li>
							</ul>
						</div>

						<div className="col-12 col-lg-6 offset-md-1 mb-3">
							<form>
								<h5>Subscribe to our newsletter</h5>
								<p>Monthly digest of what's new and exciting from us.</p>
								<div className="d-flex flex-column flex-sm-row w-100 gap-2">
									<label for="newsletter1" className="visually-hidden">Email address</label>
									<input id="newsletter1" type="text" className="form-control" placeholder="Email address" fdprocessedid="3p922" />
									<button className="btn btn-primary" type="button" fdprocessedid="mkqge">Subscribe</button>
								</div>
							</form>
						</div>
					</div>

					<div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
						<p>© 2024 Print Gigs Amc. All rights reserved.</p>
					</div>
				</footer>
			</div>
		</>
	)
}

export default Footer;