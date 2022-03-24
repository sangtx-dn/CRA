import { useSelector, useDispatch } from 'react-redux'
import { exampleAction } from 'features/example'
import { RootState, AppDispatch } from 'store'
import Button from '@mui/material/Button'

type Props = {
  // declare type of props variables here
}

const Home = ({
  // delcare props variables here
}: Props) => {
  const title = useSelector((state: RootState) => state.example.value)
  const dispatch: AppDispatch = useDispatch()
  return(
    <main>
      <h1>Title: {title || 'Home page'}</h1>
      <Button variant="contained" onClick={() => dispatch(exampleAction('New title home page'))}>Change title page</Button>
    </main>
  )
}

export default Home
