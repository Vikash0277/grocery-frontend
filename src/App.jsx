import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";

function App() {
  return (
    <MainLayout>
      <div className="space-y-8 md:space-y-12">
        <Home />
      </div>
    </MainLayout>
  );
}

export default App;
