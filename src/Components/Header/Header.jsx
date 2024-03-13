
const Header = () => {
  return (
    <header className="flex justify-center text-center pt-10 bg-[#E5E0FF]">
      <div className="flex flex-col gap-20 min-h-12 w-3/5">
        <picture className="flex w-full justify-center">
        <img className="text-5xl font-bold w-[441px]" src="Logo.png"/>
        </picture>
        <h2 className="text-3xl font-bold text-left">Hey, User!</h2>
      </div>
    </header>
  )
}

export default Header