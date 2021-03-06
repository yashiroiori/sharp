import EntityListPage from '../components/pages/EntityListPage.vue';
import DashboardPage from '../components/pages/DashboardPage.vue';
import ShowPage from '../components/pages/ShowPage';
import FormPage from '../components/pages/FormPage';

export default [
    {
        name: 'entity-list',
        path: '/list/:id',
        component: EntityListPage,
    },
    {
        name: 'dashboard',
        path: '/dashboard/:id',
        component: DashboardPage,
    },
    {
        name: 'show',
        path: '/show/:entityKey/:instanceId?',
        component: ShowPage,
    },
    {
        name: 'form',
        path: '/form/:entityKey/:instanceId?',
        component: FormPage,
    }
];