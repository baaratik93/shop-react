import style from '../styles/search.module.css'
const Search = () => {
  
  const showHandleBar = (e)=>{
    e.preventDefault();
    const bar = document.querySelector('input')
    bar.style.display = 'block'
  }
  const hideHandleBar = (e)=>{
    e.preventDefault();
    const bar = document.querySelector('input')
    bar.style.display = 'none'
  }
  return (
    <>
      <form className={style.search} action="" method="get" onMouseOver={showHandleBar} onMouseLeave={hideHandleBar}>
          <input type="text" className={style.bar}/>
          <input type="submit"  value="&#128269;" />
      </form>
    </>
  );
};

export default Search;
