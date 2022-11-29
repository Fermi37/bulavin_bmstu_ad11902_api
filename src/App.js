import React  from 'react';
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<MainPage />}/>
                    </Routes>
                </QueryClientProvider>
            </BrowserRouter>
        </>
    )
}

export default App;
