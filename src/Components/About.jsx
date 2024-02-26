import img from "../assets/aboutHero.png";

const About = () => {
  return (
    <main>
      <div>
        <img src={img} alt=""   className="w-full" />
      </div>
      <div className="p-5">
        <h1 className=" text-2xl font-bold font-sans w-full">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="my-5">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>

      <div className="p-5 bg-orange-200">
        <p className="font-bold text-2xl">your destination is waiting your van is ready.</p>
        <button className="bg-black text-white rounded-xl font-bold text-1xl my-3 p-3">Explore our vans</button>
      </div>
    </main>
  );
};

export default About;
