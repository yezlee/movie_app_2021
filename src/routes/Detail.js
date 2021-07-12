import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    // 이렇게 if문써서 하는 이유가, 그냥 url을 통해서 들어갔을때 갖고가는 state가 없으니까 그걸 막으려고 uubefined이면 "/"으로 가라. 즉 홈으로 가라.
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    if (this.props.location.state) {
      const { title, year, summary, poster, genres } =
        this.props.location.state;
      return (
        <section className="details__container">
          <div className="details">
            <div className="details__left">
              <img src={poster} alt={title} title={title} />
            </div>
            <div className="details_right">
              <p className="detail_title">{title}</p>
              <p className="detail_year">{year}</p>
              <ul className="detail__genres">
                {genres.map((genre, index) => (
                  <li key={index} className="genres__genre">
                    {genre}
                  </li>
                ))}
              </ul>
              <p className="detail__summary">{summary}</p>
            </div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
