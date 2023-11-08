
const Video = () => {
    return (
        <div>
            <div className='flex justify-center text-4xl my-10'>
                <h1>Our Video</h1>
            </div>
            <div className="max-w-screen-lg mx-auto grid grid-cols-2 gap-16">
                <div>
                    <iframe width="460" height="300" src="https://www.youtube.com/embed/UdeZkJEv5xU?si=niJNqs8Aqswg_RkK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="460" height="300" src="https://www.youtube.com/embed/HmNiKM2qI2M?si=_g19QniJCGcL4v9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="460" height="300" src="https://www.youtube.com/embed/MR-zcQcOjYA?si=FYuWl4PWLgjPNPKK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <iframe width="460" height="300" src="https://www.youtube.com/embed/JLMVrifzh-4?si=FUbh3CiSCCCuPG-p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Video;