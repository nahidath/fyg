import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../css/carousel.module.css';

const Carousel = ({ images }) => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className={styles.carousel}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img className={styles.imgCarousel} src={image.image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
