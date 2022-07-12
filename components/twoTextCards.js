function TwoTextCards(props) {
    return (
      <section className=" container px-6 md:px-24 pt-8 ">
        <h2 className="text-5xl md:text-7xl mb-5 text-center text-prima shadow-2xl shadow-gray-700">
          {props.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-10 mb-2 md:mb-12">
          <p className="text-lg text-justify font-light text-white">
            {props.text1}
            <br />
            <br />
            {props.text3}
          </p>
          <p className="text-lg text-justify font-light text-white">
            {props.text2}
            <br />
            <br />
            {props.text4}
            <br />
            {props.text6}
            <br />         
            {props.text8}
          </p>
        </div>
        <div className="px-10 mb-12">
          <p className="text-lg text-justify font-light text-white">
            {props.text5}
          </p>
        </div>
      </section>
    );
}
export default TwoTextCards