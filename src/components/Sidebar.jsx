import "../styles/sidebar.css";
import SideBarLink from "./SideBarLink";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Sidebar = () => {
return (
<div className="sidebar">

    <SideBarLink text="Home" Icon={HomeIcon} />
    <SideBarLink text="Explore" Icon={SearchIcon} />
    <SideBarLink text="Notifications" Icon={NotificationsNoneIcon} />
    <SideBarLink text="Messages" Icon={MailOutlineIcon} />
    <SideBarLink text="Bookmarks" Icon={BookmarkBorderIcon} />
    <SideBarLink text="Lists" Icon={ListAltIcon} />
    <SideBarLink text="Profile" Icon={PermIdentityIcon} />
    <SideBarLink text="More" Icon={MoreHorizIcon} />
</div>
);
};

export default Sidebar;
