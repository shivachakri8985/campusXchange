import React from 'react';
import NavBar from '../components/Navbar';
import PageHeading from '../components/PageHeading';
import ProductDetail from '../components/ProductDetail';
import Sidebar from '../components/Sidebar';
import Cart from '../components/Cart';

const ProductDetailPage = () => {
	return(
		<>
		 	<NavBar/>	
		 	<PageHeading title="Home / About"/>
		 	<section className="section section-center">
		        <div className="title">
		          <span />
		          <h2>our history</h2>
		          <span />
		        </div>
		        <p className="about-text">
				CampusXchange is an innovative e-commerce platform designed and developed by Shivachakri Meesala for NIT Silchar students, alumni, and campus residents. The website serves as a marketplace where users can buy and sell products within the campus community, creating a convenient space for transactions between seniors, juniors, and anyone who wishes to participate in buying and selling items.
		        </p>
		    </section>
		 	<Sidebar/>
		 	<Cart/>
		</>
		)
}


export default ProductDetailPage;