import React, { Component } from 'react';

import { getCMSSimpleValues } from '../../utils/CMSHelper';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasLoaded: false
    };
  }

  async componentDidMount() {
    const state = await getCMSSimpleValues(
      'copyright_text',
      'contact',
      'company_name',
      'more_info',
      'email',
      'private_policy',
      'careers',
      'address',
      'phone_number'
    );
    this.setState({ ...state, hasLoaded: true });
  }

  renderFooter() {
    console.log(this.state);
    return (
      <div className="footer">
        <div className="footer__logo">{this.state.company_name}</div>
        <div className="row">
          <div className="col-lg-7">
            {this.state.contact}
            <br />
            {this.state.address}
            <br />
            {this.state.email}
            <br />
            {this.state.phone_number}
          </div>
          <div className="col-lg-4">
            {this.state.more_info}
            <br />
            {this.state.private_policy}
            <br />
            {this.state.careers}
          </div>
        </div>
        <div className="row">
          <div className="footer__copyright--center">
            {this.state.copyright_text}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.state.hasLoaded ? this.renderFooter() : ''}</div>;
  }
}

export default Footer;
