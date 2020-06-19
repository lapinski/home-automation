import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { UserList } from '../routes/users';
import { PostList } from '../routes/posts';
import jsonServerProvider from 'ra-data-json-server';
import { Route } from 'react-router-dom';
import MyLayout from '../layout/MyLayout';
import CustomRouteLayout from '../routes/customRouteLayout';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => 
    <Admin dataProvider={dataProvider}
           layout={MyLayout}
           customRoutes={[
                <Route
                    exact
                    path="/graph"
                    component={(props: JSX.IntrinsicAttributes) => <CustomRouteLayout {...props} />}
                />,
            ]}>
        
        <Resource name="posts" list={PostList} edit={EditGuesser} />
        <Resource name="users" list={UserList} />

        <Resource name="things" list={ListGuesser} />
        <Resource name="automations" list={ListGuesser} />
        <Resource name="scenes" list={ListGuesser} />
        <Resource name="connections" list={ListGuesser} />

        <Resource name="graph" />
    </Admin>;

export default App;