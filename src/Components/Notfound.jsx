

const Notfound = () => {
  return (
    <section className="bg-black">
       <div className='disp'>
         <button className="button" data-text="Awesome">
        <span className="actual-text">&nbsp;&nbsp;404&nbsp;&nbsp;</span>
        <span aria-hidden="true" className="hover-text">
        &nbsp;&nbsp;404&nbsp;&nbsp;
        </span>
      </button>

      <button className="Ebutton" data-text="Awesome">
        <span className="error-text">&nbsp;&nbsp;page not found&nbsp;&nbsp;</span>
      </button>
      
    </div>

    </section>
  )
}

export default Notfound