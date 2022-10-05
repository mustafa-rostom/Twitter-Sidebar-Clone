import '../styles/sidebarlink.css'
const SideBarLink = ({text,Icon}) => {
    return (
        <div className='link'>
            <Icon className='icon' />
            <h2>{text} </h2>
        </div>
    );
};
export default SideBarLink;