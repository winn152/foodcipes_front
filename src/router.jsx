import './index.css'
import {createBrowserRouter} from "react-router-dom";
import LoginForm from './Components/User/LoginForm/LoginForm.jsx';
import Register from './Components/User/Register/Register.jsx';
import Home from './Components/Member/Home/Home.jsx';
import Search from './Components/Member/Search/Search.jsx';
import Profile from './Components/Member/Profile/Profile.jsx';
import Setting from './Components/Member/Setting/Setting.jsx';
import Saved from './Components/Member/Saved/Saved.jsx';
import Private from './Components/Member/Private/Private.jsx';
import Public from './Components/Member/Public/Public.jsx'
import Edit from './Components/Member/Edit/Edit.jsx';
import Search2 from './Components/Member/Search2/Search2.jsx';
import InsertPost from './Components/Member/InsertPost/InsertPost.jsx';
import Forgot from './Components/Member/Forgot/Forgot.jsx';
import Repassword from './Components/Member/Repassword/Repassword.jsx';
import Notifications from './Components/Member/Notifications/Notifications.jsx';
import Show from './Components/Member/Show/Show.jsx';
import Details from './Components/Member/Details/Details.jsx';
import Follow from './Components/Member/Follow/Follow.jsx';
import EditPost from './Components/Member/EditPost/EditPost.jsx';
import HomeAdmin from './Components/Admin/Home/Home.jsx';
import FollowingPost from './Components/Member/FollowingPost/FollowingPost.jsx';
import NavAd from './Components/Admin/NavAd/NavAd.jsx';
import FollowingPostAd from './Components/Admin/FollowingPostAd/FollowingPostAd.jsx';
import DetailPost from './Components/Admin/DetailPost/DetailPost.jsx';
import FollowAd from './Components/Admin/FollowAd/FollowAd.jsx';
import ProfileAd from './Components/Admin/ProfileAd/ProfileAd.jsx';
import SettingAd from './Components/Admin/SettingAd/SettingAd.jsx';
import EditAd from './Components/Admin/EditAd/EditAd.jsx';
import Report from './Components/Admin/Report/Report.jsx';
import EditDetailsPost from './Components/Member/EditDetailsPost/EditDetailsPost.jsx';
import DetailsDelete from './Components/Member/DetailsDelete/DetailsDelete.jsx';
import Reported from './Components/Member/Reported/Reported.jsx';
import DetailRepost from './Components/Admin/DetailRepost/DetailRepost.jsx';
import SearchPerson from './Components/Member/SearchPerson/SearchPerson.jsx';
import SearchAd from './Components/Admin/SearchAd/SearchAd.jsx';
import SearchPersonAd from './Components/Admin/SearchPersonAd/SearchPersonAd.jsx';
import DetailsDelete2 from './Components/Member/DetailsDelete2/DetailsDelete2.jsx';

const router = createBrowserRouter([
  {
    path: "/SearchPersonAd",
    element: <SearchPersonAd />
  },
  {
    path: "/SearchAd",
    element: <SearchAd />
  },
  {
    path: "/SearchPerson",
    element: <SearchPerson />
  },
  {
    path: "/DetailRepost",
    element: <DetailRepost />
  },
  {
    path: "/Reported",
    element: <Reported />
  },
  {
    path: "/DetailsDelete",
    element: <DetailsDelete />
  },
  {
    path: "/DetailsDelete2",
    element: <DetailsDelete2 />
  },
  {
    path: "/EditDetailsPost",
    element: <EditDetailsPost />
  },
  {
    path: "/DetailPost",
    element: <DetailPost />
  },
  {
    path: "/Report",
    element: <Report />
  },
  {
    path: "/EditAd",
    element: <EditAd />
  },
  {
    path: "/SettingAd",
    element: <SettingAd />
  },
  {
    path: "/ProfileAd",
    element: <ProfileAd />
  },
  {
    path: "/FollowAd",
    element: <FollowAd />
  },
  {
    path: "/DetailPost",
    element: <DetailPost />
  },
  {
    path: "/FollowingPostAd",
    element: <FollowingPostAd />
  },
  {
    path: "/",
    element: <LoginForm />
  },
  {
    path: "/Register",
    element: <Register />
  },
  {
    path: "/Home",
    element: <Home />
  },
  {
    path: "/Search",
    element: <Search />
  },
  {
    path: "/Profile",
    element: <Profile />
  },
  {
    path: "/Setting",
    element: <Setting />
  },
  {
    path: "/Saved",
    element: <Saved />
  },
  {
    path: "/Private",
    element: <Private />
  },
  {
    path: "/Public",
    element: <Public />
  },
  {
    path: "/Edit",
    element: <Edit />
  },
  {
    path: "/Search2",
    element: <Search2 />
  },
  {
    path: "/InsertPost",
    element: <InsertPost />
  },
  {
    path: "/Forgot",
    element: <Forgot />
  },
  {
    path: "/Repassword",
    element: <Repassword />
  },
  {
    path: "/Notifications",
    element: <Notifications />
  },
  {
    path: "/Show",
    element: <Show />
  },
  {
    path: "/Details",
    element: <Details />
  },
  {
    path: "/Follow",
    element: <Follow />
  },
  {
    path: "/EditPost",
    element: <EditPost />
  },
  {
    path: "/HomeAdmin",
    element: <HomeAdmin />
  },
  {
    path: "/FollowingPost",
    element: <FollowingPost />
  },
  {
    path: "/NavAd",
    element: <NavAd />
  },
]);

export default router;
