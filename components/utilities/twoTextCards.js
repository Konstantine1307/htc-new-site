function TwoTextCards(props) {
    return (
      <section className=" container px-6 md:px-24 pt-8 ">
        <h2 className="text-5xl md:text-7xl mb-5 text-center text-prima shadow-2xl shadow-gray-700">
          {props.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-10 mb-12">
          <p className="text-lg text-justify font-light text-white">
            {props.text1}
          </p>
          <p className="text-lg text-justify font-light text-white">
            {props.text2}
          </p>
        </div>
      </section>
    );
}
export default TwoTextCards