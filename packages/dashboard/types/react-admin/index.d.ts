declare module 'react-admin' {
    import { FunctionComponent } from 'react';
    import { AdminProps } from 'ra-core';
import { ReferenceField } from 'react-admin';
    
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
