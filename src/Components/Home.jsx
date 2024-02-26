import backgroundImage from "../assets/image.png"
const Home = () => {
  return (
    <section className="bg-neutral-400 p-10 h-screen"
    style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="text-white font-bold lg:text-7xl  text-3xl mt-10">
      <h1>You got the travel plans, we got the travel vans.</h1>
      </div>
      <div className="text-white my-10 lg:text-2xl">
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>

        <button className=" bg-orange-600 p-3 w-full my-3 rounded-md font-bold">Find your van</button>
      </div>
    </section> 
  )
}

export default Home