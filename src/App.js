import './App.css';
import './Style.css';
import Header from './Header';
import NavbarOne from './NavbarOne';
import NavbarTwo from './NavbarTwo';
import MySwiper from './Swiper';
import Content from './Content';
import { useRef } from 'react';

function App() {
    const swiperRef = useRef(null);

    const handleScrollUp = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleScrollDown = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <main>
                <NavbarOne onScrollUp={handleScrollUp} onScrollDown={handleScrollDown} />
                <section className='content'>
                    <div className='Swiper'>
                        <MySwiper swiperRef={swiperRef} />
                    </div>
                    <div className='Holder'>
                        <Content />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
