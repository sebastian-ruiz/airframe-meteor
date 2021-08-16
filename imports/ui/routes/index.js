import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router';

// ----------- Pages Imports ---------------
import Analytics from './Dashboards/Analytics';
import ProjectsDashboard from './Dashboards/Projects';
import System from './Dashboards/System';
import Monitor from './Dashboards/Monitor'; 
import Financial from './Dashboards/Financial';
import Stock from './Dashboards/Stock';
import Reports from './Dashboards/Reports';

import Widgets from './Widgets';

import Cards from './Cards/Cards';
import CardsHeaders from './Cards/CardsHeaders';

import NavbarOnly from './Layouts/NavbarOnly';
import SidebarDefault from './Layouts/SidebarDefault';
import SidebarA from './Layouts/SidebarA';
import DragAndDropLayout from './Layouts/DragAndDropLayout';
import SidebarWithNavbar from './Layouts/SidebarWithNavbar';

import Accordions from './Interface/Accordions';
import Alerts from './Interface/Alerts';
import Avatars from './Interface/Avatars';
import BadgesLabels from './Interface/BadgesLabels';
import Breadcrumbs from './Interface/Breadcrumbs';
import Buttons from './Interface/Buttons';
import Colors from './Interface/Colors';
import Dropdowns from './Interface/Dropdowns';
import Images from './Interface/Images';
import ListGroups from './Interface/ListGroups';
import MediaObjects from './Interface/MediaObjects';
import Modals from './Interface/Modals';
import Navbars from './Interface/Navbars';
import Paginations from './Interface/Paginations';
import ProgressBars from './Interface/ProgressBars';
import TabsPills from './Interface/TabsPills';
import TooltipPopovers from './Interface/TooltipsPopovers';
import Typography from './Interface/Typography';
import Notifications from './Interface/Notifications';
import CropImage from './Interface/CropImage';
import DragAndDropElements from './Interface/DragAndDropElements';
import Calendar from './Interface/Calendar';
import ReCharts from './Graphs/ReCharts';

import Forms from './Forms/Forms';
import FormsLayouts from './Forms/FormsLayouts';
import InputGroups from './Forms/InputGroups';
import Wizard from './Forms/Wizard';
import TextMask from './Forms/TextMask';
import Typeahead from './Forms/Typeahead';
import Toggles from './Forms/Toggles';
import Editor from './Forms/Editor';
import DatePicker from './Forms/DatePicker';
import Dropzone from './Forms/Dropzone';
import Sliders from './Forms/Sliders';

import Tables from './Tables/Tables';
import ExtendedTable from './Tables/ExtendedTable';
import AgGrid from './Tables/AgGrid';

import AccountEdit from './Apps/AccountEdit';
import BillingEdit from './Apps/BillingEdit';
import Chat from './Apps/Chat';
import Clients from './Apps/Clients';
import EmailDetails from './Apps/EmailDetails';
import Files from './Apps/Files';
import GalleryGrid from './Apps/GalleryGrid';
import GalleryTable from './Apps/GalleryTable';
import ImagesResults from './Apps/ImagesResults';
import Inbox from './Apps/Inbox';
import NewEmail from './Apps/NewEmail';
import ProfileDetails from './Apps/ProfileDetails';
import ProfileEdit from './Apps/ProfileEdit';
import Projects from './Apps/Projects';
import SearchResults from './Apps/SearchResults';
import SessionsEdit from './Apps/SessionsEdit';
import SettingsEdit from './Apps/SettingsEdit';
import Tasks from './Apps/Tasks';
import TasksDetails from './Apps/TasksDetails';
import TasksKanban from './Apps/TasksKanban';
import Users from './Apps/Users';
import UsersResults from './Apps/UsersResults';
import VideosResults from './Apps/VideosResults';

import ComingSoon from './Pages/ComingSoon';
import Confirmation from './Pages/Confirmation';
import Danger from './Pages/Danger';
import Error404 from './Pages/Error404';
import ForgotPassword from './Pages/ForgotPassword';
import LockScreen from './Pages/LockScreen';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Success from './Pages/Success';
import Timeline from './Pages/Timeline';

import Icons from './Icons';

// ----------- Layout Imports ---------------
import { DefaultNavbar } from './../layout/components/DefaultNavbar';
import { DefaultSidebar } from './../layout/components/DefaultSidebar';

import { SidebarANavbar } from './../layout/components/SidebarANavbar';
import { SidebarASidebar } from './../layout/components/SidebarASidebar';

// fakeAuth.isAuthenticated === true replaced with true for now
const PrivateRoute = ({ component: Component, ...rest }) => {

    // something here is causing: Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application.

    const user = useTracker(() => Meteor.user());
    // const user = useTracker(() => Meteor.user(), []);
    // const user = true;
    // const loggingIn = useTracker(() => Meteor.loggingIn());
    return (
        <Route {...rest} render={(props) => (user //(loggingIn || user
            ? <Component {...props} />
            : <Redirect to='/pages/login' />
        )} />
    );
};

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
    return (
        <Switch>
            <Redirect from="/" to="/dashboards/projects" exact />
            
            <PrivateRoute path="/dashboards/analytics" exact component={Analytics} />
            <PrivateRoute path="/dashboards/projects" exact component={ProjectsDashboard} />
            <PrivateRoute path="/dashboards/system" exact component={System} />
            <PrivateRoute path="/dashboards/monitor" exact component={Monitor} />
            <PrivateRoute path="/dashboards/financial" exact component={Financial} />
            <PrivateRoute path="/dashboards/stock" exact component={Stock} />
            <PrivateRoute path="/dashboards/reports" exact component={Reports} />

            <PrivateRoute path='/widgets' exact component={Widgets} />
            
            { /*    Cards Routes     */ }
            <PrivateRoute path='/cards/cards' exact component={Cards} />
            <PrivateRoute path='/cards/cardsheaders' exact component={CardsHeaders} />
            
            { /*    Layouts     */ }
            <PrivateRoute path='/layouts/navbar' component={NavbarOnly} />
            <PrivateRoute path='/layouts/sidebar' component={SidebarDefault} />
            <PrivateRoute path='/layouts/sidebar-a' component={SidebarA} />
            <PrivateRoute path="/layouts/sidebar-with-navbar" component={SidebarWithNavbar} />
            <PrivateRoute path='/layouts/dnd-layout' component={DragAndDropLayout} />

            { /*    Interface Routes   */ }
            <PrivateRoute component={ Accordions } path="/interface/accordions" />
            <PrivateRoute component={ Alerts } path="/interface/alerts" />
            <PrivateRoute component={ Avatars } path="/interface/avatars" />
            <PrivateRoute component={ BadgesLabels } path="/interface/badges-and-labels" />
            <PrivateRoute component={ Breadcrumbs } path="/interface/breadcrumbs" />
            <PrivateRoute component={ Buttons } path="/interface/buttons" />
            <PrivateRoute component={ Colors } path="/interface/colors" />
            <PrivateRoute component={ Dropdowns } path="/interface/dropdowns" />
            <PrivateRoute component={ Images } path="/interface/images" />
            <PrivateRoute component={ ListGroups } path="/interface/list-groups" />
            <PrivateRoute component={ MediaObjects } path="/interface/media-objects" />
            <PrivateRoute component={ Modals } path="/interface/modals" />
            <PrivateRoute component={ Navbars } path="/interface/navbars" />
            <PrivateRoute component={ Paginations } path="/interface/paginations" />
            <PrivateRoute component={ ProgressBars } path="/interface/progress-bars" />
            <PrivateRoute component={ TabsPills } path="/interface/tabs-pills" />
            <PrivateRoute component={ TooltipPopovers } path="/interface/tooltips-and-popovers" />
            <PrivateRoute component={ Typography } path="/interface/typography" />
            <PrivateRoute component={ Notifications } path="/interface/notifications" />
            <PrivateRoute component={ CropImage } path="/interface/crop-image" />
            <PrivateRoute component={ DragAndDropElements } path="/interface/drag-and-drop-elements" />
            <PrivateRoute component={ Calendar } path="/interface/calendar" />

            { /*    Forms Routes    */ }
            <PrivateRoute component={ Forms } path="/forms/forms" />
            <PrivateRoute component={ FormsLayouts } path="/forms/forms-layouts" />
            <PrivateRoute component={ InputGroups } path="/forms/input-groups" />
            <PrivateRoute component={ Wizard } path="/forms/wizard" />
            <PrivateRoute component={ TextMask } path="/forms/text-mask" />
            <PrivateRoute component={ Typeahead } path="/forms/typeahead" />
            <PrivateRoute component={ Toggles } path="/forms/toggles" />
            <PrivateRoute component={ Editor } path="/forms/editor" />
            <PrivateRoute component={ DatePicker } path="/forms/date-picker" />
            <PrivateRoute component={ Dropzone } path="/forms/dropzone" />
            <PrivateRoute component={ Sliders } path="/forms/sliders" />
            
            { /*    Graphs Routes   */ }
            <PrivateRoute component={ ReCharts } path="/graphs/re-charts" />

            { /*    Tables Routes   */ }
            <PrivateRoute component={ Tables } path="/tables/tables" />
            <PrivateRoute component={ ExtendedTable } path="/tables/extended-table" />
            <PrivateRoute component={ AgGrid } path="/tables/ag-grid" />

            { /*    Apps Routes     */ }
            <PrivateRoute component={ AccountEdit } path="/apps/account-edit" />
            <PrivateRoute component={ BillingEdit } path="/apps/billing-edit" />
            <PrivateRoute component={ Chat } path="/apps/chat" />
            <PrivateRoute component={ Clients } path="/apps/clients" />
            <PrivateRoute component={ EmailDetails } path="/apps/email-details" />
            <PrivateRoute component={ Files } path="/apps/files/:type"/>
            <PrivateRoute component={ GalleryGrid } path="/apps/gallery-grid" />
            <PrivateRoute component={ GalleryTable } path="/apps/gallery-table" />
            <PrivateRoute component={ ImagesResults } path="/apps/images-results" />
            <PrivateRoute component={ Inbox } path="/apps/inbox" />
            <PrivateRoute component={ NewEmail } path="/apps/new-email" />
            <PrivateRoute component={ ProfileDetails } path="/apps/profile-details" />
            <PrivateRoute component={ ProfileEdit } path="/apps/profile-edit" />
            <PrivateRoute component={ Projects } path="/apps/projects/:type" />
            <PrivateRoute component={ SearchResults } path="/apps/search-results" />
            <PrivateRoute component={ SessionsEdit } path="/apps/sessions-edit" />
            <PrivateRoute component={ SettingsEdit } path="/apps/settings-edit" />
            <PrivateRoute component={ Tasks } path="/apps/tasks/:type" />
            <PrivateRoute component={ TasksDetails } path="/apps/task-details" />
            <PrivateRoute component={ TasksKanban } path="/apps/tasks-kanban" />
            <PrivateRoute component={ Users } path="/apps/users/:type" />
            <PrivateRoute component={ UsersResults } path="/apps/users-results" />
            <PrivateRoute component={ VideosResults } path="/apps/videos-results" />

            { /*    Pages Routes    */ }
            <Route component={ ComingSoon } path="/pages/coming-soon" />
            <Route component={ Confirmation } path="/pages/confirmation" />
            <Route component={ Danger } path="/pages/danger" />
            <Route component={ Error404 } path="/pages/error-404" />
            <Route component={ ForgotPassword } path="/pages/forgot-password" />
            <Route component={ LockScreen } path="/pages/lock-screen" />
            <Route component={ Login } path="/pages/login" />
            <Route component={ Register } path="/pages/register" />
            <Route component={ Success } path="/pages/success" />
            <Route component={ Timeline } path="/pages/timeline" />

            <Route path='/icons' exact component={Icons} />

            { /*    404    */ }
            <Redirect to="/pages/error-404" />
        </Switch>
    );
};

//------ Custom Layout Parts --------
export const RoutedNavbars  = () => (
    <Switch>
        { /* Other Navbars: */}
        <Route
            component={ SidebarANavbar }
            path="/layouts/sidebar-a"
        />
        <Route
            component={ NavbarOnly.Navbar }
            path="/layouts/navbar"
        />
        <Route
            component={ SidebarWithNavbar.Navbar }
            path="/layouts/sidebar-with-navbar"
        />
        { /* Default Navbar: */}
        <Route
            component={ DefaultNavbar }
        />
    </Switch>  
);

export const RoutedSidebars = () => (
    <Switch>
        { /* Other Sidebars: */}
        <Route
            component={ SidebarASidebar }
            path="/layouts/sidebar-a"
        />
        <Route
            component={ SidebarWithNavbar.Sidebar }
            path="/layouts/sidebar-with-navbar"
        />
        { /* Default Sidebar: */}
        <Route
            component={ DefaultSidebar }
        />
    </Switch>
);
