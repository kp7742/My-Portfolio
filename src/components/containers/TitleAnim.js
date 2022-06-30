function TitleAnim({ title }) {
    return (
        <div
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="800">
            <h2 className="text-center text-3xl md:text-4xl text-text">
                <span className="text-neon font-fira">{title}</span>
            </h2>
        </div>
    );
}
    
export default TitleAnim;