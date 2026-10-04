import { Header } from './components/Header.jsx';

export default function App() {
    return (
        <>
            <Header /> {/* Шапка встанет ровно сюда */}
            
            <main>
                <p>лялька</p>
                <h1 className="text-3xl font-bold text-sky-500">Привет, AccuFood!</h1>
            </main>
        </>
    );
}