import propTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "bulgogi",
    image:
      "https://www.google.com/search?q=%EB%B6%88%EA%B3%A0%EA%B8%B0&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk02ziUIXmsNvR7TuYKh1cpJGpdpH8g:1593509047151&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi-p87lm6nqAhVbUd4KHVSWBBUQ_AUoAXoECBgQAw&biw=1440&bih=701&dpr=2#imgrc=kjZoAmvHGo-KfM",
    rating: 4.5,
  },
  {
    id: 3,
    name: "kimbap",
    image:
      "https://www.google.com/search?q=%EA%B9%80%EB%B0%A5&rlz=1C5CHFA_enKR902KR902&sxsrf=ALeKk03dn_nrK6M5JlKKfD5krm8w3qTmGQ:1593509069629&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjqn6rwm6nqAhXDQN4KHYLUA4EQ_AUoAXoECBgQAw&biw=1440&bih=701#imgrc=Xz3xQoYZw3bqEM",
    rating: 3,
  },
  {
    id: 4,
    name: "samgyetang",
    image:
      "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
    rating: 4,
  },
];

function Food({ foodName, photo, rating }) {
  return (
    <div>
      <h2>I love {foodName}</h2>
      <h4>{rating}/5.0</h4>
      <img src={photo} alt={foodName} />
    </div>
  );
}

Food.propTypes = {
  foodName: propTypes.string.isRequired,
  photo: propTypes.string.isRequired,
  rating: propTypes.number,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          foodName={dish.name}
          photo={dish.image}
          rating={dish.rating}
        ></Food>
      ))}
    </div>
  );
}

export default App;
