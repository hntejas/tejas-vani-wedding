import { useRef, useState } from "react";
import "./App.css";
import MainPage from "./components/MainPage";
import BookInvite from "./components/BookInvite";
import ReactPlayer from "react-player";

export default function App() {
  const [showInvite, setShowInvite] = useState(false);
  // const audioRef = useRef();

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
  }, []);

  return (
    <div className="wrapper">
      <header />
      {!showInvite && <MainPage handleClick={handleSwitchToInvite} />}
      {showInvite && <BookInvite />}
      <footer />

      <div className="audio-player">
        <embed
          src="/audio/invitation-audio.mp3"
          loop="true"
          autostart="true"
          width="2"
          height="0"
        />
        {/* <ReactPlayer
          url="https://vanishree-weds-tejas.netlify.app/audio/invitation-audio.mp3" // Replace with your audio file URL
          playing={true} // Autoplay the audio
          loop={true} // Loop the audio
          controls={false} // Hide player controls
          showinfo={false} // Hide video title and uploader info
        /> */}
      </div>
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
