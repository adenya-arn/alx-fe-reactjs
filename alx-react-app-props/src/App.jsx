import WelcomeMessage from "./components/WelcomeMessage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";

import ProfilePage from "./components/ProfilePage";
import UserContext from "./components/UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}
// function App() {
//   return (
//     <div>
//       <WelcomeMessage />
//       <Header />
//       <MainContent />
//       <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
//       <Footer />
//     </div>
//   );
// }

export default App;
