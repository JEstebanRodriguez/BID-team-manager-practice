import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GamesPage from '../pages/GamesPage'
import PlayerAddPage from '../pages/PlayerAddPage'
import PlayerListPage from '../pages/PlayerListPage'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PlayerListPage />} />
                <Route path='/players/list' element={<PlayerListPage />} />
                <Route path='/players/addplayer' element={<PlayerAddPage />} />
                <Route path='/status/game/:id' element={<GamesPage />} />
            </Routes>
        </BrowserRouter>
    )
}