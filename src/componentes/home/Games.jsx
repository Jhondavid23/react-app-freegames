import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllGames, changePage } from '../../store/actions/actions'
import Pagination from '../Pagination/Pagination'
import CountainerCard from '../GameCard/CountainerCard';




function Games(props) {

  // Conection with redux store
  const dispatch = useDispatch();
  const { games, allGames } = useSelector(state => state.movieSlice);
  const { currentPage } = useSelector(state => state.movieSlice)

  //Loading componentDidMount
  React.useEffect(() => {
    const fetchPost = function () {
      setLoading(true)
      dispatch(getAllGames())
      window.scrollTo(0, 0)

      setTimeout(() => setLoading(false), 1000)

    }

    fetchPost()
  }, [dispatch])

  // State
  const [loading, setLoading] = useState(false)
  const [postPerPage] = useState(12)
  const [gamePagina] = useState(true)



  //Get Current Posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = games.slice(indexOfFirstPost, indexOfLastPost);


  //Change Page
  const paginate = pageNumber => dispatch(changePage(pageNumber))

  return (
    <div>
      {<CountainerCard game={currentPost} loading={loading} allGames={allGames} gamePagina={gamePagina} />}
      {<Pagination postPerPage={postPerPage} totalPost={games.length} paginate={paginate} />}
    </div>
  )
}

export default Games