import React, { Component } from "react";
import Fade from "react-reveal/Fade";

// data
// import ItemDetails from "json/itemDetails.json";

import Header from "parts/Header";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailTitle from "parts/PageDetailTitle";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import Activites from "parts/Activities";

// redux
import { connect } from "react-redux";
import { checkoutBooking } from "store/actions/checkout";
import { fetchPage } from "store/actions/page";

// highordercomponents
class DetailsPage extends Component {
  // component baru didownload (load pertama kali)
  componentDidMount() {
    window.title = "Staycation | Details Page";
    window.scrollTo(0, 0);

    if (!this.props.page[this.props.match.params.id])
      this.props.fetchPage(
        `/detail-page/${this.props.match.params.id}`,
        this.props.match.params.id
      );
  }

  render() {
    const { page, match } = this.props;
    console.log(this.props.match.params.id);

    if (!page[match.params.id]) return null;

    const breadcrumb = [
      {
        pageTitle: "Home",
        pageHref: "",
      },
      {
        pageTitle: "House Details",
        pageHref: "",
      },
    ];
    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={page[match.params.id]} />
        <FeaturedImage data={page[match.params.id].imageId} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={page[match.params.id]} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm
                  itemDetails={page[match.params.id]}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>
        <Activites data={page[match.params.id].activityId} />
        <Testimony data={page[match.params.id].testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);
