import "./App.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";
import MailSharpIcon from "@mui/icons-material/MailSharp";

function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: 70}}>
      <AddShoppingCartIcon fontSize="large" />
      <AddPhotoAlternateOutlinedIcon fontSize="large" />
      <HomeRoundedIcon fontSize="large" />
      <ContactMailRoundedIcon fontSize="large" />
      <MailSharpIcon fontSize="large" />
    </div>
  );
}

export default App;
