import WelcomeMessage from "./components/WelcomeMessage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserProfile
        name="Arnold"
        age="24"
        bio="Loves hiking, Music and Sports"
      />
      <Footer />
    </div>
  );
}

export default App;
