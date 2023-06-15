import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Alex Osaze',
            bio: 'CEO',
            description: 'Favour is a dedicated software developer with a strong focus on building high-quality programs and delivering innovative and creative software solutions for clients. He consistently strives to stay updated with the latest industry trends and best practices to ensure the best possible results. With his expertise and passion for coding, Favour is committed to providing exceptional software solutions that meet and exceed client expectations.'
        },
        {
            name: 'Emily Thompson',
            bio: 'CEO',
            description: 'Favour is an experienced software developer who is driven by his passion for creating efficient and effective programs. He is dedicated to delivering innovative and creative software solutions that address the unique needs of clients. Favour keeps up with the latest advancements in the field and applies his expertise to develop high-quality software. With his attention to detail and problem-solving skills, Favour is committed to providing clients with outstanding software solutions.'
        },
        {
            name: 'Michael Johnson',
            bio: 'CEO',
            description: 'Favour is a highly skilled software developer with a strong focus on building robust and scalable programs. He is passionate about finding innovative solutions to complex problems and thrives in a dynamic and challenging environment. With his extensive knowledge and expertise in software development, Michael consistently delivers high-quality and reliable software solutions. He is dedicated to meeting client requirements and exceeding expectations.'
        },
        {
            name: 'Sophia Lee',
            bio: 'CEO',
            description: 'Favour is a talented software developer who is passionate about creating cutting-edge programs. He excels in developing innovative and creative software solutions that cater to the specific needs of clients. His strong problem-solving abilities and attention to detail enable him to deliver high - quality software that exceeds expectations. He stays updated with the latest technologies and embraces new challenges to provide clients with exceptional software solutions.'
        },
        // add more testimonials as needed
    ];

    return (
        <div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass="bg-inherit opacity-30 hover:opacity-70 duration-300"
                showDots
                draggable
                focusOnSelect={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 1
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1
                    }
                }}
                rewind={false}
                rewindWithAnimation={true}
                rtl={false}
                // shouldResetAutoplay
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {
                    testimonials.map((val, key) => {
                        return (
                            <div key={key} className="select-none h-52 m-5 grid gap-3 border-x-2 border-slate-600 rounded-2xl p-4 mb-4 text-center">
                                <h3 className="text-lg font-bold pt-2">{val.name}</h3>
                                <small className='text-xs font-light italic'>{val.bio}</small>
                                <p className="text-sm opacity-70 py-2 px-5 md:px-16">{val.description}</p>
                            </div>
                        );
                    })
                }
            </Carousel>
        </div>
    );
};

export default Testimonials;
