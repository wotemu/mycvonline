import React, { Component } from "react";
import { string } from "prop-types";
//import { FormattedMessage } from "react-intl";
import truncate from "lodash/truncate";

// Approximated collapsed size so that there are ~three lines of text
// in the desktop layout in the host section of the ListingPage.
const BLOG_COLLAPSED_LENGTH = 180;

const truncated = (s) => {
  return truncate(s, {
    length: BLOG_COLLAPSED_LENGTH,

    // Allow truncated text end only in specific characters. This will
    // make the truncated text shorter than the length if the original
    // text has to be shortened and the substring ends in a separator.
    //
    // This ensures that the final text doesn't get cut in the middle
    // of a word.
    separator: /\s|,|\.|:|;/,
    omission: "…",
  });
};

class ReadMore extends Component {
  constructor(props) {
    super(props);
    this.state = { expand: false };
  }
  render() {
    const { expand } = this.state;
    const { className, more } = this.props;
    const truncatedBlog = truncated(more);

    const handleShowMoreClick = () => {
      this.setState({ expand: true });
    };
    const showMore = (
      <span className="showMore" onClick={handleShowMoreClick}></span>
    );
    return (
      <span className={className}>
        {expand ? more : truncatedBlog}
        {more !== truncatedBlog && !expand ? showMore : null}
      </span>
    );
  }
}

ReadMore.defaultProps = { className: null };

ReadMore.propTypes = {
  className: string,
  more: string.isRequired,
};
export default ReadMore;
