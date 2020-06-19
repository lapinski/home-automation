declare module 'react-admin' {
    import { FunctionComponent } from 'react';
    import { AdminProps } from 'ra-core';
import { ReferenceField, useAuthenticated } from 'react-admin';
    
    // Type Shims to allow use of 'react-admin' (until they support types).
    declare const Admin: FunctionComponent<AdminProps>;

    declare interface SourceProps {
        source: any;
    }
    declare interface ReferenceProps {
        reference: any;
        label?: string;
        source: any;
    }

    declare interface ResourceProps {
        name: string;
        options: {
            [key: string]: string;
            label: string;
        };
        icon?: string;
    }

    declare const cacheDataProviderProxy: any;

    declare const useGetList: any;
    declare const useAuthenticated: any;
    declare const crudGetList: any;
    declare function getResources(input: any): ResourceProps[];

    declare const MenuItemLink: FunctionComponent<any>;
    declare const Layout: FunctionComponent<any>;

    declare const Title: FunctionComponent<any>;
    
    declare const Resource: FunctionComponent<any>;
    declare const ListGuesser: FunctionComponent<any>;
    declare const EditGuesser: FunctionComponent<any>;

    declare const List: FunctionComponent<any>;
    declare const Edit: FunctionComponent<any>;
    declare const Datagrid: FunctionComponent<any>;
    declare const TextField: FunctionComponent<SourceProps>;
    declare const EmailField: FunctionComponent<SourceProps>;
    declare const UrlField: FunctionComponent<SourceProps>;

    declare const ReferenceField: FunctionComponent<SourceProps & ReferenceProps>;

    declare const EditButton: FunctionComponent<any>;

    declare const SimpleForm: FunctionComponent<any>;
    declare const TextInput: FunctionComponent<any>;
};
