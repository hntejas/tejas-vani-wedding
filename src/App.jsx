import { useRef, useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import BookInvite from "./components/BookInvite";
// import ReactAudioPlayer from "react-audio-player";

export default function App() {
  const [showInvite, setShowInvite] = useState(false);
  const audioRef = useRef();

  const handleSwitchToInvite = () => {
    const pages = document.querySelectorAll(".book-cover");

    pages.forEach((page) => {
      page.classList.add("exit-animation");
    });
    setTimeout(() => {
      setShowInvite(true);
    }, 300);
  };

  useState(() => {
    setTimeout(() => {
      handleSwitchToInvite();
    }, 3000);
    audioRef.current?.play?.();
  }, []);

  return (
    <div className="wrapper">
      <audio autoPlay loop ref={audioRef.current}>
        <source src="audio/invitation-audio.mp3" type="audio/mpeg" />
      </audio>
      <header />
      {!showInvite && <MainPage handleClick={handleSwitchToInvite} />}
      {showInvite && <BookInvite />}
      <footer />
    </div>
  );
}

/** hi ididya hu yel hoithu chat hu
yello clicked, ide thane https://meet.google.com/icu-jccf-xty

hu, hello vani papuuuu, gmeet madana? hu 
  Design Ideas
  - https://dribbble.com/shots/21505820-Glorious-Indian-Elegance-Green-and-Gold-Wedding-Celebration
  - https://dribbble.com/shots/20002925-Indian-Couple-Illustration
  - https://www.wedmegood.com/wedding-invitations/wedding-card-designs

hu bande
*/
